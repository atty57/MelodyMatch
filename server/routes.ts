import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  const apiRouter = express.Router();
  
  // Get all resources
  apiRouter.get("/resources", async (req, res) => {
    try {
      const resources = await storage.getResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });
  
  // Get resource by ID
  apiRouter.get("/resources/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid resource ID" });
      }
      
      const resource = await storage.getResourceById(id);
      if (!resource) {
        return res.status(404).json({ message: "Resource not found" });
      }
      
      res.json(resource);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resource" });
    }
  });
  
  // Get all directory entries
  apiRouter.get("/directory", async (req, res) => {
    try {
      const entries = await storage.getDirectoryEntries();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch directory entries" });
    }
  });
  
  // Get directory entry by ID
  apiRouter.get("/directory/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid directory entry ID" });
      }
      
      const entry = await storage.getDirectoryEntryById(id);
      if (!entry) {
        return res.status(404).json({ message: "Directory entry not found" });
      }
      
      res.json(entry);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch directory entry" });
    }
  });
  
  // Filter directory entries by type
  apiRouter.get("/directory/type/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const entries = await storage.getDirectoryEntriesByType(type);
      res.json(entries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch directory entries" });
    }
  });
  
  // Subscribe to newsletter
  apiRouter.post("/subscribe", async (req, res) => {
    try {
      const parsed = insertSubscriberSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid subscription data", 
          errors: parsed.error.format() 
        });
      }
      
      const existingSubscriber = await storage.getSubscriberByEmail(parsed.data.email);
      if (existingSubscriber) {
        return res.status(409).json({ message: "Email already subscribed" });
      }
      
      const subscriber = await storage.createSubscriber(parsed.data);
      res.status(201).json({ message: "Successfully subscribed to newsletter" });
    } catch (error) {
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });
  
  // Submit contact form
  apiRouter.post("/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid contact form data", 
          errors: parsed.error.format() 
        });
      }
      
      const message = await storage.createContactMessage(parsed.data);
      res.status(201).json({ 
        message: "Your message has been sent successfully. We'll get back to you soon." 
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Register API routes with prefix
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
