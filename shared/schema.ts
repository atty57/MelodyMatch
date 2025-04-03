import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  userType: text("user_type").notNull(), // "artist" or "label"
  country: text("country").notNull(),
  genre: text("genre"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  name: true,
  userType: true,
  country: true,
  genre: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Newsletter subscribers
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

// Resources
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  downloadLink: text("download_link"),
  accessLink: text("access_link"),
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
});

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;

// Directory entries
export const directoryEntries = pgTable("directory_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  location: text("location").notNull(),
  tags: text("tags").array().notNull(),
  initials: text("initials").notNull(),
  bgColor: text("bg_color").notNull(),
});

export const insertDirectoryEntrySchema = createInsertSchema(directoryEntries).omit({
  id: true,
});

export type InsertDirectoryEntry = z.infer<typeof insertDirectoryEntrySchema>;
export type DirectoryEntry = typeof directoryEntries.$inferSelect;

// Contact messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Compliance Checklist Items
export const complianceChecklistItems = pgTable("compliance_checklist_items", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  requiredFor: text("required_for").array().notNull(),
  isMandatory: boolean("is_mandatory").notNull().default(false),
  resources: text("resources").array()
});

export const insertComplianceChecklistItemSchema = createInsertSchema(complianceChecklistItems).omit({
  id: true
});

export type InsertComplianceChecklistItem = z.infer<typeof insertComplianceChecklistItemSchema>;
export type ComplianceChecklistItem = typeof complianceChecklistItems.$inferSelect;

// User Compliance Checklists
export const userChecklists = pgTable("user_checklists", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  type: text("type").notNull(), // e.g., "artist", "label", "distributor"
  createdAt: timestamp("created_at").notNull().defaultNow(),
  completedItems: integer("completed_items").array().notNull().default([]),
  totalItems: integer("total_items").notNull().default(0),
  notes: text("notes"),
  status: text("status").notNull().default("in_progress")
});

export const insertUserChecklistSchema = createInsertSchema(userChecklists).omit({
  id: true,
  createdAt: true
});

export type InsertUserChecklist = z.infer<typeof insertUserChecklistSchema>;
export type UserChecklist = typeof userChecklists.$inferSelect;
