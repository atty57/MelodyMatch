import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  resources, type Resource, type InsertResource,
  directoryEntries, type DirectoryEntry, type InsertDirectoryEntry,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Newsletter subscriber operations
  getSubscribers(): Promise<Subscriber[]>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Resource operations
  getResources(): Promise<Resource[]>;
  getResourceById(id: number): Promise<Resource | undefined>;
  getResourcesByCategory(category: string): Promise<Resource[]>;
  createResource(resource: InsertResource): Promise<Resource>;
  
  // Directory operations
  getDirectoryEntries(): Promise<DirectoryEntry[]>;
  getDirectoryEntryById(id: number): Promise<DirectoryEntry | undefined>;
  getDirectoryEntriesByType(type: string): Promise<DirectoryEntry[]>;
  createDirectoryEntry(entry: InsertDirectoryEntry): Promise<DirectoryEntry>;
  
  // Contact message operations
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private resources: Map<number, Resource>;
  private directoryEntries: Map<number, DirectoryEntry>;
  private contactMessages: Map<number, ContactMessage>;
  
  private userCurrentId: number;
  private subscriberCurrentId: number;
  private resourceCurrentId: number;
  private directoryEntryCurrentId: number;
  private contactMessageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.resources = new Map();
    this.directoryEntries = new Map();
    this.contactMessages = new Map();
    
    this.userCurrentId = 1;
    this.subscriberCurrentId = 1;
    this.resourceCurrentId = 1;
    this.directoryEntryCurrentId = 1;
    this.contactMessageCurrentId = 1;
    
    // Initialize with sample data
    this.initializeResources();
    this.initializeDirectoryEntries();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subscriber methods
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberCurrentId++;
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: new Date()
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  // Resource methods
  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }
  
  async getResourceById(id: number): Promise<Resource | undefined> {
    return this.resources.get(id);
  }
  
  async getResourcesByCategory(category: string): Promise<Resource[]> {
    return Array.from(this.resources.values()).filter(
      (resource) => resource.category === category,
    );
  }
  
  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = this.resourceCurrentId++;
    const resource: Resource = { ...insertResource, id };
    this.resources.set(id, resource);
    return resource;
  }
  
  // Directory entry methods
  async getDirectoryEntries(): Promise<DirectoryEntry[]> {
    return Array.from(this.directoryEntries.values());
  }
  
  async getDirectoryEntryById(id: number): Promise<DirectoryEntry | undefined> {
    return this.directoryEntries.get(id);
  }
  
  async getDirectoryEntriesByType(type: string): Promise<DirectoryEntry[]> {
    return Array.from(this.directoryEntries.values()).filter(
      (entry) => entry.type === type,
    );
  }
  
  async createDirectoryEntry(insertEntry: InsertDirectoryEntry): Promise<DirectoryEntry> {
    const id = this.directoryEntryCurrentId++;
    const entry: DirectoryEntry = { ...insertEntry, id };
    this.directoryEntries.set(id, entry);
    return entry;
  }
  
  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  // Initialize with sample data
  private initializeResources() {
    const sampleResources: InsertResource[] = [
      {
        title: "Complete Guide to Music Copyright",
        description: "Learn everything you need to know about protecting your music with proper copyright procedures.",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        category: "Guide",
        date: "June 15, 2023",
        downloadLink: "/resources/copyright-guide.pdf"
      },
      {
        title: "Royalty Calculation Template",
        description: "Calculate fair royalty distributions with our easy-to-use template for all music distribution channels.",
        imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        category: "Tool",
        date: "May 22, 2023",
        accessLink: "/resources/royalty-calculator"
      },
      {
        title: "Music Licensing Contract Templates",
        description: "Professional contract templates for various music licensing scenarios reviewed by industry experts.",
        imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
        category: "Template",
        date: "April 10, 2023",
        downloadLink: "/resources/licensing-templates.zip"
      }
    ];
    
    sampleResources.forEach(resource => {
      this.createResource(resource);
    });
  }
  
  private initializeDirectoryEntries() {
    const sampleEntries: InsertDirectoryEntry[] = [
      {
        name: "Sonic Legends",
        type: "Record Label",
        location: "Los Angeles, CA",
        tags: ["Rock", "Alternative", "Indie"],
        initials: "SL",
        bgColor: "primary"
      },
      {
        name: "Beat Dynamics",
        type: "Music Distributor",
        location: "Nashville, TN",
        tags: ["Digital", "International", "Analytics"],
        initials: "BD",
        bgColor: "secondary"
      },
      {
        name: "Rhythm Masters",
        type: "Publishing Agency",
        location: "New York, NY",
        tags: ["Licensing", "Sync", "Royalties"],
        initials: "RM",
        bgColor: "accent"
      }
    ];
    
    sampleEntries.forEach(entry => {
      this.createDirectoryEntry(entry);
    });
  }
}

export const storage = new MemStorage();
