# NIAKAZI ICT Solutions - Full Stack Application

## Overview

NIAKAZI ICT Solutions is a comprehensive full-stack web application showcasing ICT services and solutions. The application serves as both a company portfolio and a lead generation platform, featuring service catalogs, quote requests, contact forms, and newsletter subscriptions. Built with modern web technologies, it provides a responsive and interactive user experience with professional business presentation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with hash-based navigation
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **Animation**: Framer Motion for smooth transitions, scroll animations, and interactive elements
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for robust form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: TSX for development server with hot reloading capabilities
- **Build**: Vite for frontend bundling and esbuild for backend compilation

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting for scalable cloud database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Centralized schema definitions with Zod integration for validation
- **Migrations**: Drizzle Kit for database schema migrations and version control

## Key Components

### Core Entities
1. **Contacts**: Customer inquiries and contact form submissions
2. **Newsletters**: Email subscription management for marketing campaigns
3. **Quotes**: Detailed quote requests with project specifications and requirements

### Frontend Modules
- **Landing Page**: Hero section, services showcase, statistics, and company information
- **Quote System**: Multi-step quote request form with service selection and project details
- **Contact Forms**: Multiple contact points including general inquiries and newsletter signup
- **Product Catalog**: Service offerings with pricing and detailed descriptions
- **Interactive Elements**: Scroll animations, progress indicators, and responsive navigation

### Backend Services
- **API Endpoints**: RESTful endpoints for form submissions and data persistence
- **Validation**: Server-side validation using Zod schemas for data integrity
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **Development Tools**: Request logging and performance monitoring

## Data Flow

1. **User Interaction**: Users interact with forms and navigation elements
2. **Form Validation**: Client-side validation using React Hook Form and Zod schemas
3. **API Requests**: Data submission through TanStack React Query to backend endpoints
4. **Server Processing**: Express.js processes requests with validation and error handling
5. **Database Operations**: Drizzle ORM handles database interactions with PostgreSQL
6. **Response Handling**: Success/error responses managed through toast notifications
7. **State Updates**: React Query manages cache invalidation and optimistic updates

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library for accessibility
- **Animation**: Framer Motion for complex animations and scroll effects
- **Form Management**: React Hook Form ecosystem with Zod resolver integration
- **Utility Libraries**: Date-fns for date handling, class-variance-authority for styling

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **Session Management**: connect-pg-simple for PostgreSQL-based session storage
- **Development**: Cross-env for environment variable management across platforms

### Development Tools
- **Replit Integration**: Custom Replit plugins for development environment optimization
- **TypeScript**: Comprehensive type checking and modern JavaScript features
- **Build Tools**: Vite with React plugin and esbuild for optimized builds

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime and web modules
- **Development Server**: Concurrent frontend (Vite) and backend (TSX) development servers
- **Port Configuration**: Frontend on port 5000 with automatic external port mapping
- **Hot Reloading**: Vite HMR for frontend and TSX watch mode for backend

### Production Build
- **Frontend**: Vite production build with code splitting and optimization
- **Backend**: esbuild compilation with ESM format and external package handling
- **Static Assets**: Frontend assets served from Express.js in production mode
- **Process Management**: Single Node.js process serving both frontend and backend

### Database Management
- **Connection**: Environment-based DATABASE_URL configuration for flexibility
- **Schema Deployment**: Drizzle Kit push commands for schema synchronization
- **Migration Strategy**: Version-controlled schema changes through Drizzle migrations

## Changelog

```
Changelog:
- December 19, 2024. Project migration to Replit completed
- December 19, 2024. Card sizes reduced for better UX
- December 19, 2024. Page order reorganized: Services → Products → Solutions
- December 19, 2024. Call-to-action moved from Services to Products page
- June 19, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```