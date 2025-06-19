import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { contacts, newsletters, quotes, type Contact, type Newsletter, type Quote, type InsertContact, type InsertNewsletter, type InsertQuote } from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  createQuote(quote: InsertQuote): Promise<Quote>;
}

export class DatabaseStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = await db
      .select()
      .from(newsletters)
      .where(eq(newsletters.email, insertNewsletter.email))
      .limit(1);
    
    if (existingSubscription.length > 0) {
      throw new Error("Email already subscribed");
    }

    const [newsletter] = await db.insert(newsletters).values(insertNewsletter).returning();
    return newsletter;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const [quote] = await db.insert(quotes).values(insertQuote).returning();
    return quote;
  }
}

export const storage = new DatabaseStorage();
