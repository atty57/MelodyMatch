# MusicPliance Platform

MusicPliance is a comprehensive music industry compliance and management platform designed to streamline legal, professional, and creative workflows for artists, labels, and industry professionals.

## Frontend Architecture

The MusicPliance frontend is built with modern web technologies that enable a stunning, responsive, and interactive user experience with a visually appealing dark theme, glassmorphism effects, and animated elements.

### Tech Stack

- **React**: Core UI library for building component-based interfaces
- **TypeScript**: Type-safe code that improves development experience and reduces bugs
- **Tailwind CSS**: Utility-first CSS framework for consistent, responsive styling
- **Shadcn UI**: Pre-built accessible UI components that integrate well with Tailwind
- **Wouter**: Lightweight routing library for navigation
- **Tanstack React Query**: Data fetching, caching, and state management
- **Zod**: Schema validation for forms and API responses
- **React Hook Form**: Form management with validation

### Design Features

- **Glassmorphism Effects**: The UI uses frosted glass effects for cards and modal components
- **Animated Elements**: Subtle animations and microinteractions enhance the user experience
- **Dark Theme**: A modern dark color scheme with gradient accents
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices

### Key Components

- **Animated Inputs**: Custom animated form inputs with focus states
- **Animated Buttons**: Loading and success states for improved feedback
- **Toast Notifications**: Non-intrusive feedback for user actions
- **Tabs Interface**: Clean tab navigation for different user types
- **Cards with Glow Effects**: Visual hierarchy enhanced with subtle glow effects
- **Floating Elements**: Background particles and orbs for visual depth

## Authentication System

MusicPliance implements a comprehensive authentication system that supports different user types and secure password management.

### User Types

The platform supports multiple user types:
- **Artists**: Musicians, songwriters, performers, etc.
- **Labels**: Record labels, publishers, and management companies

### Authentication Features

- **User Registration**: 
  - Separate flows for artist and label accounts
  - Form validation with Zod schemas
  - Secure password hashing with scrypt
  - Custom user fields based on account type (e.g., genre for artists)

- **Login System**:
  - Email and password authentication
  - User type selection
  - Remember me functionality
  - Session-based authentication

- **Protected Routes**:
  - Role-based access control
  - Type-specific dashboards (artist/label)
  - Loading states during authentication

- **Session Management**:
  - Server-side session storage
  - Automatic login after registration
  - Secure logout functionality

### Security Implementation

- **Password Security**:
  - Strong password requirements enforcement
  - scrypt password hashing with salting
  - Timing-safe comparison to prevent timing attacks

- **Session Security**:
  - HTTP-only cookies
  - CSRF protection
  - Session expiration and renewal

- **Data Protection**:
  - Password never returned to the client
  - Input sanitization and validation
  - Error messages don't leak sensitive information

## Authentication Flow

1. **Registration**:
   - User submits registration form
   - Backend validates the data
   - Password is securely hashed
   - User is created in storage
   - User is automatically logged in
   - Session is created

2. **Login**:
   - User submits login credentials
   - Backend verifies credentials
   - User session is created if successful
   - User is redirected to appropriate dashboard

3. **Session Validation**:
   - Front-end checks session status on protected routes
   - If session is invalid, redirect to login
   - If session is valid, load appropriate dashboard

4. **Logout**:
   - User requests logout
   - Session is destroyed on the server
   - Front-end clears user state
   - User is redirected to home page

## Directory Structure

```
client/
  ├── src/
  │   ├── components/
  │   │   ├── ui/           # Reusable UI components
  │   │   │   ├── animated-button.tsx
  │   │   │   ├── animated-input.tsx
  │   │   │   ├── form.tsx
  │   │   │   ├── navbar.tsx
  │   │   │   └── protected-route.tsx
  │   │   └── [section]/    # Section-specific components
  │   ├── hooks/
  │   │   ├── use-auth.tsx  # Authentication context and hooks
  │   │   ├── use-toast.ts  # Toast notification system
  │   │   └── use-mobile.tsx # Responsive behavior hooks
  │   ├── lib/
  │   │   ├── queryClient.ts # API query configuration
  │   │   ├── types.ts       # Common type definitions
  │   │   └── utils.ts       # Utility functions
  │   ├── pages/
  │   │   ├── login.tsx      # User login page
  │   │   ├── register.tsx   # User registration page
  │   │   ├── artist-dashboard.tsx
  │   │   └── label-dashboard.tsx
  │   ├── App.tsx           # Main application component with routes
  │   └── main.tsx          # Application entry point
  └── index.html
```

## Server-Side Authentication

The server-side authentication is built with:

- **Express.js**: Web server framework
- **Passport.js**: Authentication middleware
- **express-session**: Session management
- **crypto**: For secure password handling

The authentication endpoints are:

- `POST /api/auth/register`: Create a new user account
- `POST /api/auth/login`: Authenticate user and create session
- `POST /api/auth/logout`: End user session
- `GET /api/auth/user`: Get currently authenticated user

## Getting Started

### Registration Process

To create a new account:

1. Navigate to `/register`
2. Select your account type (Artist or Label)
3. Fill in required information:
   - Username
   - Email
   - Password
   - Name
   - Country
   - Genre (for artists)
4. Submit the registration form

### Login Process

To log in to an existing account:

1. Navigate to `/login`
2. Select your account type (Artist or Label)
3. Enter your email and password
4. Click "Sign in"

## Best Practices

- Always use the `useAuth` hook to access authentication state and methods
- Protect routes that require authentication using the `ProtectedRoute` component
- Validate all form inputs with appropriate Zod schemas
- Handle loading and error states in UI components
- Use toast notifications for user feedback
