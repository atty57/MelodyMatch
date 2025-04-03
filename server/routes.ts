import express, { type Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { 
  insertSubscriberSchema, 
  insertContactMessageSchema,
  insertUserChecklistSchema
} from "@shared/schema";
import { z } from "zod";

// Authentication middleware
function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized - Login required" });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  setupAuth(app);
  
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
  
  // Get all compliance checklist items
  apiRouter.get("/compliance-checklist", async (req, res) => {
    try {
      const items = await storage.getComplianceChecklistItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checklist items" });
    }
  });
  
  // Get all compliance checklist items (alternate route)
  apiRouter.get("/compliance/checklist", async (req, res) => {
    try {
      const items = await storage.getComplianceChecklistItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checklist items" });
    }
  });
  
  // Get compliance checklist items by category
  apiRouter.get("/compliance-checklist/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const items = await storage.getComplianceChecklistItemsByCategory(category);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checklist items" });
    }
  });
  
  // Get compliance checklist items by type
  apiRouter.get("/compliance-checklist/type/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const items = await storage.getComplianceChecklistItemsByType(type);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checklist items" });
    }
  });
  
  // Get compliance checklist item by ID
  apiRouter.get("/compliance-checklist/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid compliance checklist item ID" });
      }
      
      const item = await storage.getComplianceChecklistItemById(id);
      if (!item) {
        return res.status(404).json({ message: "Compliance checklist item not found" });
      }
      
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checklist item" });
    }
  });
  
  // Get user checklists by user ID - requires authentication
  apiRouter.get("/user-checklists/:userId", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      // Make sure users can only access their own checklists
      if (req.user && req.user.id !== userId) {
        return res.status(403).json({ message: "Forbidden - You can only access your own checklists" });
      }
      
      const checklists = await storage.getUserChecklists(userId);
      res.json(checklists);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user checklists" });
    }
  });
  
  // Create a new user checklist - requires authentication
  apiRouter.post("/user-checklists", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const parsed = insertUserChecklistSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid user checklist data", 
          errors: parsed.error.format() 
        });
      }
      
      // Check if user exists
      const user = await storage.getUser(parsed.data.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Count total items based on type
      const complianceItems = await storage.getComplianceChecklistItemsByType(parsed.data.type);
      const totalItems = complianceItems.length;
      
      // Create the checklist with total items count
      const checklist = await storage.createUserChecklist({
        ...parsed.data,
        totalItems,
        completedItems: [],
        status: "in_progress"
      });
      
      res.status(201).json(checklist);
    } catch (error) {
      res.status(500).json({ message: "Failed to create user checklist" });
    }
  });
  
  // Update a user checklist - requires authentication
  apiRouter.patch("/user-checklists/:id", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid user checklist ID" });
      }
      
      // Validate request body
      const updateSchema = z.object({
        completedItems: z.array(z.number()).optional(),
        notes: z.string().nullable().optional(),
        status: z.enum(["in_progress", "completed", "pending"]).optional()
      });
      
      const parsed = updateSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid update data", 
          errors: parsed.error.format() 
        });
      }
      
      // Check if checklist exists
      const checklist = await storage.getUserChecklistById(id);
      if (!checklist) {
        return res.status(404).json({ message: "User checklist not found" });
      }
      
      // Update the checklist
      const updatedChecklist = await storage.updateUserChecklist(
        id,
        parsed.data.completedItems || checklist.completedItems,
        parsed.data.notes === null ? null : (parsed.data.notes || undefined),
        parsed.data.status || undefined
      );
      
      res.json(updatedChecklist);
    } catch (error) {
      res.status(500).json({ message: "Failed to update user checklist" });
    }
  });

  // Register API routes with prefix
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
