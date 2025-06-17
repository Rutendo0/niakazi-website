# NIAKAZI ICT Solutions Web Application

## Overview

This is a full-stack web application for NIAKAZI, an ICT solutions company based in Zimbabwe. The application serves as a corporate website showcasing services, products, and allowing customer contact and newsletter subscriptions. Built with modern web technologies, it provides a professional online presence with both static content presentation and dynamic data handling capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints for contact forms and newsletter subscriptions
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Drizzle, using Neon serverless)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Development Environment
- **Platform**: Replit-optimized with specific configurations
- **Dev Server**: Vite development server with HMR
- **Process Management**: tsx for TypeScript execution in development
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation

## Key Components

### Database Schema
The application uses two main database tables:
- **contacts**: Stores contact form submissions (name, email, subject, message, timestamp)
- **newsletters**: Stores email subscriptions with unique constraint on email addresses

### API Endpoints
- `POST /api/contact`: Handles contact form submissions with Zod validation
- `POST /api/newsletter`: Manages newsletter subscriptions with duplicate email prevention

### Storage Layer
- **Production**: PostgreSQL database via Drizzle ORM
- **Development**: In-memory storage implementation (MemStorage) for local development
- **Interface**: IStorage interface allows switching between storage implementations

### Frontend Pages and Components
- **Single Page Application**: All content served through one route with section anchoring
- **Component Structure**: Modular components for Header, Hero, Services, Products, About, Contact, Footer
- **UI Components**: Comprehensive shadcn/ui component library integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Data Flow

1. **User Interaction**: Users navigate the single-page website viewing company information
2. **Contact Forms**: Contact and newsletter forms collect user data with client-side validation
3. **API Communication**: Form submissions sent to Express API endpoints via fetch requests
4. **Data Validation**: Server-side validation using Zod schemas shared between frontend and backend
5. **Database Operations**: Validated data stored in PostgreSQL via Drizzle ORM
6. **User Feedback**: Success/error feedback provided through toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for enhanced user experience
- **@radix-ui/***: Headless UI components for accessibility

### Development Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error handling in Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit

### Build and Development Tools
- **vite**: Frontend build tool and development server
- **esbuild**: Backend bundling for production
- **tsx**: TypeScript execution for development
- **tailwindcss**: Utility-first CSS framework

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts both frontend and backend in development mode
- **Port Configuration**: Development server runs on port 5000
- **Hot Reload**: Vite HMR for frontend, tsx for backend TypeScript execution

### Production Build
- **Frontend Build**: `vite build` compiles React application to static assets
- **Backend Build**: `esbuild` bundles server code into single executable
- **Output**: Frontend assets to `dist/public`, backend to `dist/index.js`

### Hosting Configuration
- **Platform**: Replit with autoscale deployment target
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Port Mapping**: Internal port 5000 mapped to external port 80

### Environment Variables
- **DATABASE_URL**: Required PostgreSQL connection string
- **NODE_ENV**: Environment mode (development/production)

## Changelog
```
Changelog:
- June 17, 2025. Initial setup
- June 17, 2025. Enhanced UI/UX with modern design elements:
  * Added animated SVG illustrations for Hero, About, and Contact sections
  * Implemented advanced parallax scrolling effects and floating animations
  * Enhanced visual design with glassmorphism effects and gradient text
  * Added modern hover animations and interactive elements
  * Improved responsive design with mobile-first approach
  * Added visual icons and improved typography throughout
  * Enhanced contact form with better user experience
  * Fixed TypeScript errors and improved component structure
- June 17, 2025. Completed migration from Replit Agent to Replit environment:
  * Successfully migrated all configurations and dependencies
  * Updated all branding from "Dandemutande" to "NIAKAZI" throughout the application
  * Updated contact information, social media links, and email addresses
  * Verified application functionality and security practices
  * Ensured proper client/server separation and robust architecture
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```