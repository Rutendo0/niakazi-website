import { contacts, newsletters, quotes, type Contact, type Newsletter, type Quote, type InsertContact, type InsertNewsletter, type InsertQuote } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  createQuote(quote: InsertQuote): Promise<Quote>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private quotes: Map<number, Quote>;
  private contactId: number;
  private newsletterId: number;
  private quoteId: number;

  constructor() {
    this.contacts = new Map();
    this.newsletters = new Map();
    this.quotes = new Map();
    this.contactId = 1;
    this.newsletterId = 1;
    this.quoteId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletters.values()).find(
      (sub) => sub.email === insertNewsletter.email
    );
    
    if (existingSubscription) {
      throw new Error("Email already subscribed");
    }

    const id = this.newsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = this.quoteId++;
    const quote: Quote = {
      ...insertQuote,
      id,
      createdAt: new Date(),
    };
    this.quotes.set(id, quote);
    return quote;
  }
}

export const storage = new MemStorage();
