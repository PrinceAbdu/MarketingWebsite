import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contact, type ContactMessage } from "@shared/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

const contactSchema = createInsertSchema(contact);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Message received. We'll get back to you soon.",
        data: message
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit your message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
