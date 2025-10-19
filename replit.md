# Donatello Pizza Restaurant - Replit.md

## Overview

This is a full-stack web application for "Donatello," an artisan pizza restaurant specializing in Detroit and New York style pizzas. The application is built with a modern React frontend and Express.js backend, featuring a clean, responsive design with a pizza-themed aesthetic.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom pizza-themed color palette
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling server code

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized in `shared/schema.ts` for type safety
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Frontend Components
- **Pages**: Home, Menu, and 404 Not Found
- **Layout Components**: Header with smooth scrolling navigation, Footer with contact info
- **Content Sections**: Hero, Pizza Sections, Craft Process, Testimonials, Contact
- **UI Components**: Complete shadcn/ui component library for consistent design

### Backend Infrastructure
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Development Server**: Vite integration for hot reloading in development
- **Static Serving**: Express static file serving for production

### Shared Resources
- **Type Safety**: Shared TypeScript interfaces and Zod schemas
- **Database Schema**: User model with username/password authentication

## Data Flow

1. **Client Requests**: React app handles routing and UI state
2. **API Communication**: TanStack Query manages server state and caching
3. **Server Processing**: Express routes handle API requests
4. **Data Storage**: Storage abstraction layer manages data persistence
5. **Database Operations**: Drizzle ORM provides type-safe database interactions

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL adapter

### UI and Styling
- Radix UI component primitives
- Tailwind CSS for utility-first styling
- Custom fonts (Playfair Display, Inter, Dancing Script)
- Font Awesome icons

### Development Tools
- Vite for build tooling and development server
- esbuild for production server bundling
- TypeScript for type safety
- Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Replit configuration with Node.js 20, web, and PostgreSQL modules
- Vite dev server with hot module replacement
- tsx for TypeScript execution without compilation
- Port 5000 for local development

### Production Build
- Vite builds frontend to `dist/public`
- esbuild bundles server code to `dist/index.js`
- Static file serving from build output
- Environment variable configuration for database

### Database Setup
- Drizzle migrations in `migrations/` directory
- PostgreSQL connection via environment variable
- Schema push command for development database sync

## Changelog

Changelog:
- June 20, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.