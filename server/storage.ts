import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  resources, type Resource, type InsertResource,
  directoryEntries, type DirectoryEntry, type InsertDirectoryEntry,
  contactMessages, type ContactMessage, type InsertContactMessage,
  complianceChecklistItems, type ComplianceChecklistItem, type InsertComplianceChecklistItem,
  userChecklists, type UserChecklist, type InsertUserChecklist
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  // Session store
  sessionStore: any;
  
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
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
  
  // Compliance checklist operations
  getComplianceChecklistItems(): Promise<ComplianceChecklistItem[]>;
  getComplianceChecklistItemsByCategory(category: string): Promise<ComplianceChecklistItem[]>;
  getComplianceChecklistItemsByType(type: string): Promise<ComplianceChecklistItem[]>;
  getComplianceChecklistItemById(id: number): Promise<ComplianceChecklistItem | undefined>;
  createComplianceChecklistItem(item: InsertComplianceChecklistItem): Promise<ComplianceChecklistItem>;
  
  // User checklist operations
  getUserChecklists(userId: number): Promise<UserChecklist[]>;
  getUserChecklistById(id: number): Promise<UserChecklist | undefined>;
  createUserChecklist(checklist: InsertUserChecklist): Promise<UserChecklist>;
  updateUserChecklist(id: number, completedItems: number[], notes?: string, status?: string): Promise<UserChecklist | undefined>;
}

import createMemoryStore from "memorystore";
import session from "express-session";

const MemoryStore = createMemoryStore(session);

export class MemStorage implements IStorage {
  public sessionStore: session.Store;
  
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private resources: Map<number, Resource>;
  private directoryEntries: Map<number, DirectoryEntry>;
  private contactMessages: Map<number, ContactMessage>;
  private complianceChecklistItems: Map<number, ComplianceChecklistItem>;
  private userChecklists: Map<number, UserChecklist>;
  
  private userCurrentId: number;
  private subscriberCurrentId: number;
  private resourceCurrentId: number;
  private directoryEntryCurrentId: number;
  private contactMessageCurrentId: number;
  private complianceChecklistItemCurrentId: number;
  private userChecklistCurrentId: number;

  constructor() {
    // Initialize session store
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
    
    // Initialize data stores
    this.users = new Map();
    this.subscribers = new Map();
    this.resources = new Map();
    this.directoryEntries = new Map();
    this.contactMessages = new Map();
    this.complianceChecklistItems = new Map();
    this.userChecklists = new Map();
    
    this.userCurrentId = 1;
    this.subscriberCurrentId = 1;
    this.resourceCurrentId = 1;
    this.directoryEntryCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.complianceChecklistItemCurrentId = 1;
    this.userChecklistCurrentId = 1;
    
    // Initialize with sample data
    this.initializeResources();
    this.initializeDirectoryEntries();
    this.initializeComplianceChecklistItems();
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

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    // Make sure all required fields are present
    const user: User = { 
      ...insertUser, 
      id,
      genre: insertUser.genre || null,
      createdAt: insertUser.createdAt || new Date()
    };
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
    const resource: Resource = { 
      ...insertResource, 
      id,
      downloadLink: insertResource.downloadLink || null,
      accessLink: insertResource.accessLink || null 
    };
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
  
  // Compliance checklist methods
  async getComplianceChecklistItems(): Promise<ComplianceChecklistItem[]> {
    return Array.from(this.complianceChecklistItems.values());
  }
  
  async getComplianceChecklistItemsByCategory(category: string): Promise<ComplianceChecklistItem[]> {
    return Array.from(this.complianceChecklistItems.values()).filter(
      (item) => item.category === category,
    );
  }
  
  async getComplianceChecklistItemsByType(type: string): Promise<ComplianceChecklistItem[]> {
    return Array.from(this.complianceChecklistItems.values()).filter(
      (item) => item.requiredFor.includes(type),
    );
  }
  
  async getComplianceChecklistItemById(id: number): Promise<ComplianceChecklistItem | undefined> {
    return this.complianceChecklistItems.get(id);
  }
  
  async createComplianceChecklistItem(insertItem: InsertComplianceChecklistItem): Promise<ComplianceChecklistItem> {
    const id = this.complianceChecklistItemCurrentId++;
    const item: ComplianceChecklistItem = { 
      ...insertItem, 
      id,
      resources: insertItem.resources || null,
      isMandatory: insertItem.isMandatory !== undefined ? insertItem.isMandatory : false
    };
    this.complianceChecklistItems.set(id, item);
    return item;
  }
  
  // User checklist methods
  async getUserChecklists(userId: number): Promise<UserChecklist[]> {
    return Array.from(this.userChecklists.values()).filter(
      (checklist) => checklist.userId === userId,
    );
  }
  
  async getUserChecklistById(id: number): Promise<UserChecklist | undefined> {
    return this.userChecklists.get(id);
  }
  
  async createUserChecklist(insertChecklist: InsertUserChecklist): Promise<UserChecklist> {
    const id = this.userChecklistCurrentId++;
    const checklist: UserChecklist = { 
      ...insertChecklist, 
      id,
      createdAt: new Date(),
      completedItems: insertChecklist.completedItems || [],
      totalItems: insertChecklist.totalItems || 0,
      notes: insertChecklist.notes || null,
      status: insertChecklist.status || "in_progress"
    };
    this.userChecklists.set(id, checklist);
    return checklist;
  }
  
  async updateUserChecklist(id: number, completedItems: number[], notes?: string | null, status?: string): Promise<UserChecklist | undefined> {
    const checklist = this.userChecklists.get(id);
    if (!checklist) return undefined;
    
    const updatedChecklist: UserChecklist = {
      ...checklist,
      completedItems,
      notes: notes !== undefined ? notes : checklist.notes,
      status: status !== undefined ? status : checklist.status
    };
    
    this.userChecklists.set(id, updatedChecklist);
    return updatedChecklist;
  }
  
  // Initialize sample compliance checklist items
  private initializeComplianceChecklistItems() {
    const sampleItems: InsertComplianceChecklistItem[] = [
      {
        category: "Copyright",
        title: "Register Your Compositions with Copyright Office",
        description: "Register all original compositions with the U.S. Copyright Office or equivalent international authority.",
        requiredFor: ["artist", "songwriter", "publisher"],
        isMandatory: true,
        resources: ["/resources/copyright-registration-guide.pdf"]
      },
      {
        category: "Royalties",
        title: "Register with PROs (ASCAP, BMI, SESAC)",
        description: "Join a Performing Rights Organization to collect performance royalties for your music.",
        requiredFor: ["artist", "songwriter", "publisher"],
        isMandatory: true,
        resources: ["/resources/pro-comparison.pdf"]
      },
      {
        category: "Licensing",
        title: "Create Sync Licensing Agreement Templates",
        description: "Prepare standard templates for synchronization licensing to streamline placement opportunities.",
        requiredFor: ["artist", "publisher", "label"],
        isMandatory: false,
        resources: ["/resources/sync-license-template.docx"]
      },
      {
        category: "Distribution",
        title: "Secure Digital Distribution Agreement",
        description: "Establish a contract with a digital distributor to place your music on streaming platforms.",
        requiredFor: ["artist", "label"],
        isMandatory: true,
        resources: ["/resources/distribution-comparison.pdf"]
      },
      {
        category: "Legal",
        title: "Register Business Entity",
        description: "Form an appropriate business entity (LLC, Corporation) to protect personal assets.",
        requiredFor: ["artist", "label", "publisher", "manager"],
        isMandatory: false,
        resources: ["/resources/music-business-entities.pdf"]
      },
      {
        category: "Metadata",
        title: "Standardize Metadata for All Releases",
        description: "Ensure consistent, accurate metadata across all platforms including ISRC and UPC codes.",
        requiredFor: ["artist", "label", "distributor"],
        isMandatory: true,
        resources: ["/resources/metadata-guide.pdf"]
      },
      {
        category: "Contracts",
        title: "Artist-Label Agreement",
        description: "Clear written agreement outlining rights, royalties, and obligations between artist and label.",
        requiredFor: ["artist", "label"],
        isMandatory: true,
        resources: ["/resources/label-agreement-template.pdf"]
      },
      {
        category: "International",
        title: "Register with International Collection Societies",
        description: "Ensure your music is registered with collection societies in key international markets.",
        requiredFor: ["artist", "publisher", "songwriter"],
        isMandatory: false,
        resources: ["/resources/international-royalties.pdf"]
      },
      {
        category: "Accounting",
        title: "Set Up Royalty Accounting System",
        description: "Establish a system to track, calculate, and distribute royalties to all entitled parties.",
        requiredFor: ["label", "publisher", "distributor"],
        isMandatory: true,
        resources: ["/resources/royalty-accounting-guide.pdf"]
      },
      {
        category: "Copyright",
        title: "Secure Mechanical Licenses",
        description: "Obtain proper licenses for covering or sampling other artists' work in your recordings.",
        requiredFor: ["artist", "label", "producer"],
        isMandatory: true,
        resources: ["/resources/mechanical-licensing-guide.pdf"]
      }
    ];
    
    sampleItems.forEach(item => {
      this.createComplianceChecklistItem(item);
    });
  }
}

export const storage = new MemStorage();
