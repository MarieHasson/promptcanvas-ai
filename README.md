# Next.js 15 Turborepo Starter

A modern, production-ready monorepo built with Next.js 15, React 19, and the latest web technologies. This project demonstrates best practices for building scalable applications with a shared design system and component library.

## Demo 👀

> **Warning**
> This app is a work in progress.
> http://localhost:3000

## ✨ Features

### �️ **Architecture**
- 🚀 **Turborepo** monorepo with optimized caching and parallel builds
- 📦 **pnpm** workspace with efficient dependency management
- 🎯 **TypeScript** strict mode with comprehensive type safety
- � **Biome** for fast linting and formatting
- � **Sherif** for dependency validation across workspace

### 🎨 **Frontend Stack**
- ⚡ **Next.js 15** with App Router and React Server Components
- ⚛️ **React 19** with latest features and optimizations
- 🎨 **Tailwind CSS 4** with modern CSS features
- 🧩 **Shadcn/UI** + **Radix UI** for accessible components
- 🌙 **next-themes** for dark/light mode support
- 🎭 **Framer Motion** for smooth animations

### 🛠️ **Development Experience**
- 📚 **Storybook** for component development and documentation
- 🔥 **Turbopack** for blazing fast development builds
- 🧪 **Vitest** for unit testing
- 🎭 **Playwright** for end-to-end testing
- 📱 **Responsive design** with mobile-first approach
- 🤖 **AI-optimized** with comprehensive TypeScript, JSDoc, and debugging tools
- 🚀 **Enhanced VSCode** configuration for optimal development experience
- 📖 **Comprehensive documentation** with Architecture Decision Records (ADRs)

### 🔐 **Authentication & Data**
- �‍♂️ **Clerk** for complete authentication solution
- 🗄️ **MongoDB** with **Mongoose** ODM
- ⚡ **Zod** for runtime type validation
- 🛡️ **T3 Env** for type-safe environment variables
- 🌐 **Axios** for API requests

### � **Forms & Validation**
- 📝 **React Hook Form** with **Zod** resolvers
- 🎯 **Type-safe forms** with comprehensive validation
- 🔄 **Optimistic updates** for better UX

### 🎨 **UI Components**
- 🧩 **50+ pre-built components** in shared design system
- ♿ **Accessible by default** with Radix UI primitives
- 🎨 **Consistent theming** across applications
- 📊 **Recharts** for data visualization
- �️ **Cloudinary** integration for image optimization

### 📝 **Content & Documentation**
- 📄 **MDX** support for rich content
- 🎨 **Syntax highlighting** with Shiki
- 🔗 **Auto-generated table of contents**
- 📚 **Component documentation** in Storybook

## 📦 What's inside?

This Turborepo uses [pnpm](https://pnpm.io) as a package manager and includes the following packages and applications:

### Apps

- **`web`** - Main Next.js 15 application with:
  - 🏠 Public pages with modern UI
  - 🔐 Admin dashboard with full CRUD operations
  - 📱 Responsive design for all screen sizes
  - 🌙 Dark/light theme support
  - 📄 MDX-powered documentation pages

- **`storybook`** - Component library documentation featuring:
  - 📚 Interactive component showcase
  - 🎭 Visual testing with Chromatic
  - ♿ Accessibility testing with a11y addon
  - 📊 Component usage examples and best practices

### Packages

- **`@workspace/design-system`** - Shared component library with:
  - 🧩 50+ production-ready components
  - 🎨 Consistent theming and styling
  - ♿ Accessibility-first design
  - 📱 Mobile-responsive components
  - 🔧 TypeScript definitions

- **`@workspace/typescript-config`** - Shared TypeScript configurations:
  - `base.json` - Base TypeScript configuration
  - `nextjs.json` - Next.js specific settings
  - `react-library.json` - React library configuration

### Architecture

```
promptcanvas-ai/
├── apps/
│   ├── web/                 # Next.js application
│   │   ├── app/            # App Router pages
│   │   │   ├── (admin)/    # Admin dashboard routes
│   │   │   ├── (public)/   # Public-facing routes
│   │   │   └── api/        # API routes
│   │   ├── components/     # Shared components
│   │   ├── features/       # Feature-based modules
│   │   │   ├── admin/      # Admin functionality
│   │   │   └── public/     # Public functionality
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── types/          # TypeScript type definitions
│   └── storybook/          # Component documentation
└── packages/
    ├── design-system/      # Shared UI components
    └── typescript-config/  # Shared TS configs
```

Each package and app is 100% **TypeScript** with strict type checking enabled.

See also: [Accessibility Data Attributes](docs/a11y-data-attributes.md) for the `data-a11y` semantic instrumentation taxonomy used across the UI for testing, analytics, and accessibility audits.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 24.6.0 or later
- **pnpm** 10.14.0 or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MarieHasson/promptcanvas-ai.git
   cd promptcanvas-ai
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy environment template for the web app
   cp apps/web/.env.example apps/web/.env.local

   # Configure your environment variables
   # See Environment Variables section below
   ```

4. **Start the development servers:**
   ```bash
   # Start all development servers
   pnpm dev

   # Or start individual services
   pnpm --filter=web dev        # Next.js app (localhost:3000)
   pnpm --filter=storybook dev  # Storybook (localhost:6006)
   ```

### 🤖 AI Development Setup

This project is optimized for AI-assisted development. For the best experience:

1. **Install recommended VSCode extensions:**
   ```bash
   # Extensions are automatically suggested when you open the project
   # Or install manually from .vscode/extensions.json
   ```

2. **Use AI analysis tools:**
   ```bash
   # Generate comprehensive project analysis
   ./scripts/ai-analysis.sh

   # Debug assistance
   ./scripts/debug-helper.sh status
   ```

3. **Follow documentation standards:**
   - Read `docs/AI-DEVELOPMENT-GUIDE.md` for comprehensive guidelines
   - Use JSDoc comments for all public functions
   - Create ADRs for architectural decisions
   - Follow TypeScript strict mode patterns

4. **Quick development commands:**
   ```bash
   pnpm typecheck    # TypeScript validation
   pnpm lint         # Code quality checks
   pnpm format       # Auto-format code
   pnpm ai:analyze   # Run AI analysis
   pnpm build        # Production build
   ```

5. **Debugging:**
   - Use VSCode debug configurations in `.vscode/launch.json`
   - Debug Next.js app, Storybook, or tests
   - Comprehensive debugging tools available

## 📋 Available Scripts
   pnpm dev
   ```

   This will start:
   - 📱 Web app at [http://localhost:3000](http://localhost:3000)
   - 📚 Storybook at [http://localhost:6006](http://localhost:6006)

### Environment Variables

Create `apps/web/.env.local` with the following variables:

```bash
# Database
MONGODB_URI=your_mongodb_connection_string
MONGODB_DATABASE=your_database_name

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Optional: Cloudinary for image uploads
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

## 📜 Available Scripts

### Root Level Commands

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm build            # Build all packages and apps
pnpm lint             # Run linting across workspace
pnpm typecheck        # Type-check all packages
pnpm format           # Format code with Biome

# Dependencies
pnpm check-dependencies  # Validate dependencies with Sherif
pnpm bump-deps          # Update all dependencies
pnpm bump-ui            # Update Shadcn UI components

# Cleanup
pnpm clean             # Clean all build artifacts
```

### Individual App Commands

```bash
# Web app
cd apps/web
pnpm dev              # Start Next.js with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Storybook
cd apps/storybook
pnpm dev              # Start Storybook dev server
pnpm build            # Build static Storybook
pnpm chromatic        # Deploy to Chromatic
```

## 🔧 Development Workflow

### Adding New Components

1. **Create in design system:**
   ```bash
   # Add new Shadcn UI component
   pnpm bump-ui

   # Or add specific component
   cd packages/design-system
   pnpm dlx shadcn@canary add button
   ```

2. **Document in Storybook:**
   ```bash
   # Create story file in apps/storybook/stories/
   # Component will auto-appear in Storybook
   ```

### Code Quality

- **Linting:** Biome for fast linting and formatting
- **Type Checking:** Strict TypeScript across all packages
- **Testing:** Vitest for unit tests, Playwright for E2E
- **Dependencies:** Sherif validates workspace dependencies

### Deployment

This project is optimized for deployment on **Vercel**:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect the Next.js app

The build process leverages Turborepo's caching for faster builds.

## 🏗️ Turborepo Features

### Remote Caching

Turborepo can use [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share build artifacts across machines and CI/CD pipelines.

**Setup Remote Caching:**

```bash
# Authenticate with Vercel
pnpm dlx turbo login

# Link your repository
pnpm dlx turbo link
```

### Parallel Execution

Turborepo automatically runs tasks in parallel when possible:
- ⚡ **Build tasks** run in dependency order
- 🔄 **Lint and typecheck** run in parallel
- 📦 **Package builds** leverage incremental compilation

### Caching Strategy

- **Local caching** for faster subsequent builds
- **Input-based invalidation** ensures accuracy
- **Shared cache** across team members (with remote caching)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes** and ensure tests pass
4. **Commit your changes:** `git commit -m 'Add amazing feature'`
5. **Push to the branch:** `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the established code style (enforced by Biome)
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting PR

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Next.js App Router](https://nextjs.org/docs/app) - Modern routing and layouts
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### Turborepo Resources
- [Turborepo Documentation](https://turborepo.org/docs)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Configuration](https://turborepo.org/docs/reference/configuration)

### UI/UX Resources
- [Shadcn/UI](https://ui.shadcn.com/) - Re-usable components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for hosting and deployment platform
- [Shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Turborepo team](https://turborepo.org) for the monorepo tooling
- [Next.js team](https://nextjs.org) for the incredible framework
