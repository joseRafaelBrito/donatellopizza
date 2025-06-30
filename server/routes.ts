import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve static files from attached_assets folder
  app.use("/attached_assets", (req, res, next) => {
    const filePath = path.join(
      __dirname,
      "..",
      "public",
      "attached_assets",
      req.path
    );
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(`Error serving file ${filePath}:`, err);
        res.status(404).send("File not found");
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
