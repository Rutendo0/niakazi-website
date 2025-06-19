import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { contacts, quotes, type Contact, type Quote, type InsertContact, type InsertQuote } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createQuote(quote: InsertQuote): Promise<Quote>;
}

// In-memory storage for local development
export class MemStorage implements IStorage {
  private contacts: Contact[] = [];
  private quotes: Quote[] = [];
  private nextContactId = 1;
  private nextQuoteId = 1;

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact: Contact = {
      id: this.nextContactId++,
      ...insertContact,
      createdAt: new Date(),
    };
    this.contacts.push(contact);
    return contact;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const quote: Quote = {
      id: this.nextQuoteId++,
      ...insertQuote,
      createdAt: new Date(),
    };
    this.quotes.push(quote);
    return quote;
  }
}

// Database storage for production
export class DatabaseStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    const sql = neon(process.env.DATABASE_URL);
    this.db = drizzle(sql);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await this.db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const [quote] = await this.db.insert(quotes).values(insertQuote).returning();
    return quote;
  }
}

// Use database storage if DATABASE_URL is available, otherwise use memory storage
export const storage: IStorage = process.env.DATABASE_URL 
  ? new DatabaseStorage() 
  : new MemStorage();
