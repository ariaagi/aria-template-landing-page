/**
 * Centralized landing-page copy for the template generator.
 * Each field comment is the character limit (current string length).
 */

export const siteCopy = {
  meta: {
    // Site name for document title and Open Graph — match brand.displayName
    siteName: "Your App",
    // Meta description for SEO and social cards (34 characters max)
    description: "Smart scheduling powered by AI.",
    // Extended meta description for app/site config (62 characters max)
    templateDescription:
      "Your template for building AI-powered products with Aria.",
    // Open Graph image alt text (45 characters max)
    openGraphImageAlt: "Your App — product preview",
    keywords: {
      // SEO keyword 1 (11 characters max)
      keyword1: "AI Calendar",
      // SEO keyword 2 (17 characters max)
      keyword2: "Smart Scheduling",
      // SEO keyword 3 (12 characters max)
      keyword3: "Productivity",
      // SEO keyword 4 (15 characters max)
      keyword4: "Time Management",
    },
    metadataKeywords: {
      // Additional metadata keyword (8 characters max)
      brand: "Your App",
      // Additional metadata keyword (2 characters max)
      ai: "AI",
      // Additional metadata keyword (5 characters max)
      agent: "Agent",
      // Additional metadata keyword (9 characters max)
      magicUi: "Aria",
      // Additional metadata keyword (10 characters max)
      freelancer: "Freelancer",
      // Additional metadata keyword (5 characters max)
      uiUx: "UI/UX",
      // Additional metadata keyword (9 characters max)
      developer: "Developer",
      // Additional metadata keyword (13 characters max)
      reactTemplate: "React Template",
      // Additional metadata keyword (17 characters max)
      nextTemplate: "Next.js Template",
      // Additional metadata keyword (8 characters max)
      tailwind: "Tailwind",
      // Additional metadata keyword (6 characters max)
      shadcn: "Shadcn",
      // Additional metadata keyword (12 characters max)
      tailwindV4: "Tailwind V4",
    },
    author: {
      // Metadata author name (15 characters max)
      name: "Your Team",
      // Metadata author profile URL (28 characters max)
      url: "https://ariaagi.com",
    },
    twitter: {
      // Twitter creator handle (14 characters max)
      creator: "@yourhandle",
    },
  },

  links: {
    // Product app URL — all Get Started buttons link here (40 characters max)
    app: "https://ideanameapp.ariaagi.com",
    // Public landing page URL for SEO / Open Graph (40 characters max)
    site: "https://your-landing.ariaagi.com",
    // Support email (17 characters max)
    email: "hello@yourdomain.com",
    // Twitter/X profile URL (32 characters max)
    twitter: "https://twitter.com/yourhandle",
    // Discord invite URL (28 characters max)
    discord: "https://discord.gg/your-server",
    // GitHub organization URL (28 characters max)
    github: "https://github.com/your-org",
    // Instagram profile URL (32 characters max)
    instagram: "https://instagram.com/yourhandle",
    // Alternate Twitter URL for site metadata (27 characters max)
    twitterMetadata: "https://x.com/yourhandle",
    // Alternate GitHub URL for site metadata (35 characters max)
    githubMetadata: "https://github.com/your-org",
  },

  brand: {
    // Show logo in nav and footer: 1 = yes, 0 = no (name aligns to logo position when 0)
    hasLogo: 0,
    // Logo file path under /public (40 characters max) — used when hasLogo is 1
    logoSrc: "/logo.png",
    // Product name shown in nav, footer, and UI (32 characters max)
    displayName: "StartupCACCalculatorSaaS",
    // Global primary CTA label (11 characters max)
    cta: "Get Started",
    // Footer flickering grid text on mobile (32 characters max)
    footerGridTextMobile: "Your App",
    // Footer flickering grid text on desktop (27 characters max)
    footerGridTextDesktop: "Streamline your workflow",
    // Footer social link aria-label (11 characters max)
    footerSocialAriaLabel: "Follow on X",
    // Footer X icon: 1 = show when links are set, 0 = hide
    showFooterSocial: 1,
  },

  nav: {
    links: {
      // Nav link: Home (4 characters max)
      home: "Home",
      // Nav link: How it Works (13 characters max)
      howItWorks: "How it Works",
      // Nav link: Features (8 characters max)
      features: "Features",
      // Nav link: Pricing (7 characters max)
      pricing: "Pricing",
    },
  },

  hero: {
    // Hero announcement badge (30 characters max)
    badge: "Introducing custom automations",
    // Hero headline (44 characters max)
    title: "Meet your AI Agent Streamline your workflow",
    // Hero subheadline (128 characters max)
    description:
      "AI assistant designed to streamline your digital workflows and handle mundane tasks, so you can focus on what truly matters",
    cta: {
      // Hero primary button (11 characters max)
      primary: "Get Started",
    },
    visual: {
      // Hero visual punchy phrase (40 characters max)
      phrase: "Automate the work. Own the outcome.",
      // Hero visual alt text (48 characters max)
      alt: "Your App product preview",
    },
  },

  companyShowcase: {
    // Company logos section label (33 characters max)
    label: "Features in this MVP",
    items: {
      item1: {
        // Icon accessible name (16 characters max)
        name: "OpenAI",
        // Hover label (28 characters max)
        hoverText: "AI-native workflows",
        icon: "openai" as const,
      },
      item2: {
        name: "Google",
        hoverText: "Workspace sync",
        icon: "google" as const,
      },
      item3: {
        name: "Figma",
        hoverText: "Design handoff",
        icon: "figma" as const,
      },
      item4: {
        name: "Vercel",
        hoverText: "Deploy in seconds",
        icon: "vercel" as const,
      },
      item5: {
        name: "Integrations",
        hoverText: "Connect your stack",
        icon: "integrations" as const,
      },
      item6: {
        name: "Analytics",
        hoverText: "Actionable insights",
        icon: "analytics" as const,
      },
    },
  },

  bentoSection: {
    // Bento section title (29 characters max)
    title: "Empower Your Workflow with AI",
    // Bento section description (128 characters max)
    description:
      "Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations.",
    items: {
      item1: {
        // Bento card 1 title (27 characters max)
        title: "Real-time AI Collaboration",
        // Bento card 1 description (120 characters max)
        description:
          "Experience real-time assistance. Ask your AI Agent to coordinate tasks, answer questions, and maintain team alignment.",
      },
      item2: {
        // Bento card 2 title (22 characters max)
        title: "Seamless Integrations",
        // Bento card 2 description (95 characters max)
        description:
          "Unite your favorite tools for effortless connectivity. Boost productivity through interconnected workflows.",
      },
      item3: {
        // Bento card 3 title (25 characters max)
        title: "Instant Insight Reporting",
        // Bento card 3 description (108 characters max)
        description:
          "Transform raw data into clear insights in seconds. Empower smarter decisions with real-time, always-learning intelligence.",
      },
      item4: {
        // Bento card 4 title (17 characters max)
        title: "Smart Automation",
        // Bento card 4 description (103 characters max)
        description:
          "Set it, forget it. Your AI Agent tackles repetitive tasks so you can focus on strategy, innovation, and growth.",
      },
    },
    animations: {
      first: {
        // Bento chat user message (120 characters max)
        userMessage:
          "Hey, I need help scheduling a team meeting that works well for everyone. Any suggestions for finding an optimal time slot?",
        // Bento AI reasoning response (228 characters max)
        reasoningResponse:
          "Based on your calendar patterns and preferences, I recommend scheduling the team meeting for Tuesday at 2pm. This time slot has historically had the highest attendance rate, and it avoids conflicts with other recurring meetings.",
        // Bento chat user avatar alt (11 characters max)
        userAvatarAlt: "User Avatar",
      },
      second: {
        orbit: {
          // Bento card 2 orbit icons (allowlist keys — inner / middle / outer ring, 3 each)
          inner1: "sailboat" as const,
          inner2: "database" as const,
          inner3: "figma" as const,
          middle1: "integrations" as const,
          middle2: "openai" as const,
          middle3: "google" as const,
          outer1: "vercel" as const,
          outer2: "terminal" as const,
          outer3: "analytics" as const,
        },
      },
      fourth: {
        // Fourth bento timeline label (8 characters max)
        timelineLabel: "12:00 AM",
        tasks: {
          // Fourth bento task label 1 (10 characters max)
          task1: "Bento grid",
          // Fourth bento task label 2 (13 characters max)
          task2: "Landing Page",
          // Fourth bento task label 3 (8 characters max)
          task3: "Add Task",
        },
      },
    },
  },

  featureSection: {
    // Features section title (24 characters max)
    title: "Simple. Seamless. Smart.",
    // Features section description (77 characters max)
    description:
      "Discover how Your App transforms your commands into action in four easy steps",
    items: {
      item1: {
        // Feature step 1 title (28 characters max)
        title: "Ask Your AI Agent Directly",
        // Feature step 1 body (108 characters max)
        content:
          "Speak or type your command. Your App captures your intent and sets the process in motion.",
      },
      item2: {
        // Feature step 2 title (24 characters max)
        title: "Let Your App Process It",
        // Feature step 2 body (79 characters max)
        content:
          "We prioritize the needs and preferences of our users in our design process.",
      },
      item3: {
        // Feature step 3 title (35 characters max)
        title: "Receive Instant, Actionable Results",
        // Feature step 3 body (84 characters max)
        content:
          "Our features seamlessly integrate with your existing systems for a smooth experience.",
      },
      item4: {
        // Feature step 4 title (23 characters max)
        title: "Continuous Improvement",
        // Feature step 4 body (82 characters max)
        content:
          "We are constantly updating and improving our features to provide the best experience.",
      },
    },
  },

  growthSection: {
    // Growth section title (25 characters max)
    title: "Built for Secure Growth",
    // Growth section description (102 characters max)
    description:
      "Where advanced security meets seamless scalability, designed to protect your data and empower your growth.",
    items: {
      item1: {
        // Growth card 1 title (24 characters max)
        title: "Advanced Task Security",
        // Growth card 1 description (88 characters max)
        description:
          "Safeguard your tasks with state-of-art encryption and secure access to your workflow data.",
      },
      item2: {
        // Growth card 2 title (18 characters max)
        title: "Scalable for Teams",
        // Growth card 2 description (83 characters max)
        description:
          "Grow with your team. Track tasks across multiple workspaces and all team members.",
      },
    },
  },

  benefits: {
    // Benefit 1 (52 characters max)
    benefit1: "Save hours each week with AI-optimized scheduling.",
    // Benefit 2 (49 characters max)
    benefit2: "Reduce scheduling conflicts and double-bookings.",
    // Benefit 3 (52 characters max)
    benefit3: "Improve work-life balance with smart time allocation.",
    // Benefit 4 (58 characters max)
    benefit4: "Increase productivity with AI-driven time management insights.",
  },

  quoteSection: {
    // Product pull quote. Hype line about what the product delivers (140 characters max)
    quote:
      "Your App is the fastest way to turn busywork into momentum. Less chasing tasks, more delivering the work that actually grows your business.",
  },

  pricing: {
    // Pricing section title (28 characters max)
    title: "Pricing that scales with you",
    // Pricing section description (76 characters max)
    description:
      "Whichever plan you pick, it's free until you love your docs. That's our promise.",
    // Popular plan badge (7 characters max)
    popularBadge: "Popular",
    // Billing period suffix (6 characters max)
    periodSuffix: "/month",
    tier: {
      // Plan name (7 characters max)
      name: "Startup",
      // Plan price display (4 characters max)
      price: "$12",
      // Plan billing period label (5 characters max)
      period: "month",
      // Plan yearly price display (5 characters max)
      yearlyPrice: "$120",
      // Plan description (42 characters max)
      description: "Ideal for professionals and small teams",
      // Plan CTA button (15 characters max)
      buttonText: "Upgrade to Pro",
      features: {
        // Pricing feature 1 (13 characters max)
        feature1: "Custom domain",
        // Pricing feature 2 (17 characters max)
        feature2: "SEO-optimizations",
        // Pricing feature 3 (24 characters max)
        feature3: "Auto-generated API docs",
        // Pricing feature 4 (27 characters max)
        feature4: "Built-in components library",
        // Pricing feature 5 (23 characters max)
        feature5: "E-commerce integration",
        // Pricing feature 6 (27 characters max)
        feature6: "User authentication system",
        // Pricing feature 7 (22 characters max)
        feature7: "Multi-language support",
        // Pricing feature 8 (30 characters max)
        feature8: "Real-time collaboration tools",
      },
    },
  },

  useCasesSection: {
    // Use cases section title (9 characters max)
    title: "Use Cases",
    // Use cases section description (88 characters max)
    description:
      "See how teams use Your App to automate work across support, sales, product, and operations.",
    items: [
      {
        id: "1",
        // Use case 1 title (18 characters max)
        title: "Customer Support",
        // Use case 1 category (7 characters max)
        category: "Support",
        // Use case 1 body before highlight (88 characters max)
        bodyBefore:
          "Route tickets, draft replies, and summarize threads so agents focus on complex issues.",
        // Use case 1 highlight (58 characters max)
        highlight:
          "First response times drop without adding headcount.",
      },
      {
        id: "2",
        // Use case 2 title (14 characters max)
        title: "Sales Outreach",
        // Use case 2 category (5 characters max)
        category: "Sales",
        // Use case 2 body before highlight (89 characters max)
        bodyBefore:
          "Research prospects, personalize sequences, and log activity in your CRM automatically.",
        // Use case 2 highlight (54 characters max)
        highlight: "Reps spend more time in conversations, less in admin.",
      },
      {
        id: "3",
        // Use case 3 title (16 characters max)
        title: "Content Creation",
        // Use case 3 category (9 characters max)
        category: "Marketing",
        // Use case 3 body before highlight (88 characters max)
        bodyBefore:
          "Turn briefs into drafts, adapt tone per channel, and keep brand guidelines consistent.",
        // Use case 3 highlight (52 characters max)
        highlight: "Ship campaigns faster with fewer revision cycles.",
      },
      {
        id: "4",
        // Use case 4 title (13 characters max)
        title: "Data Analysis",
        // Use case 4 category (9 characters max)
        category: "Analytics",
        // Use case 4 body before highlight (95 characters max)
        bodyBefore:
          "Query dashboards in plain language and get charts plus narrative summaries for stakeholders.",
        // Use case 4 highlight (61 characters max)
        highlight: "Insights land in minutes instead of waiting on reports.",
      },
      {
        id: "5",
        // Use case 5 title (11 characters max)
        title: "Code Review",
        // Use case 5 category (11 characters max)
        category: "Engineering",
        // Use case 5 body before highlight (84 characters max)
        bodyBefore:
          "Scan pull requests for bugs, style issues, and missing tests before human review.",
        // Use case 5 highlight (55 characters max)
        highlight: "Teams merge with confidence and fewer regressions.",
      },
      {
        id: "6",
        // Use case 6 title (18 characters max)
        title: "Meeting Scheduling",
        // Use case 6 category (10 characters max)
        category: "Operations",
        // Use case 6 body before highlight (88 characters max)
        bodyBefore:
          "Coordinate across time zones, send reminders, and attach agendas to calendar invites.",
        // Use case 6 highlight (57 characters max)
        highlight: "Scheduling back-and-forth disappears from your inbox.",
      },
      {
        id: "7",
        // Use case 7 title (18 characters max)
        title: "Research Assistant",
        // Use case 7 category (7 characters max)
        category: "Product",
        // Use case 7 body before highlight (99 characters max)
        bodyBefore:
          "Gather competitor notes, user feedback, and market trends into one brief for product decisions.",
        // Use case 7 highlight (55 characters max)
        highlight: "Discovery stays current without manual tab hopping.",
      },
      {
        id: "8",
        // Use case 8 title (19 characters max)
        title: "Employee Onboarding",
        // Use case 8 category (6 characters max)
        category: "People",
        // Use case 8 body before highlight (92 characters max)
        bodyBefore:
          "Answer HR questions, assign checklists, and surface policy docs for new hires on day one.",
        // Use case 8 highlight (51 characters max)
        highlight: "Onboarding feels guided instead of overwhelming.",
      },
      {
        id: "9",
        // Use case 9 title (10 characters max)
        title: "QA Testing",
        // Use case 9 category (7 characters max)
        category: "Quality",
        // Use case 9 body before highlight (96 characters max)
        bodyBefore:
          "Generate test cases from specs, run smoke checks, and file issues with clear reproduction steps.",
        // Use case 9 highlight (53 characters max)
        highlight: "Release confidence improves before every deploy.",
      },
      {
        id: "10",
        // Use case 10 title (16 characters max)
        title: "Inventory Alerts",
        // Use case 10 category (8 characters max)
        category: "Commerce",
        // Use case 10 body before highlight (90 characters max)
        bodyBefore:
          "Monitor stock levels, forecast reorder points, and notify suppliers when thresholds are hit.",
        // Use case 10 highlight (42 characters max)
        highlight: "Stockouts and overstock both trend down.",
      },
      {
        id: "11",
        // Use case 11 title (18 characters max)
        title: "Campaign Reporting",
        // Use case 11 category (6 characters max)
        category: "Growth",
        // Use case 11 body before highlight (93 characters max)
        bodyBefore:
          "Pull metrics from ads and email tools into weekly summaries with recommended next actions.",
        // Use case 11 highlight (57 characters max)
        highlight: "Marketing reviews start with answers, not spreadsheets.",
      },
      {
        id: "12",
        // Use case 12 title (16 characters max)
        title: "Resume Screening",
        // Use case 12 category (10 characters max)
        category: "Recruiting",
        // Use case 12 body before highlight (92 characters max)
        bodyBefore:
          "Match candidates to role requirements and highlight strengths for hiring managers to review.",
        // Use case 12 highlight (51 characters max)
        highlight: "Shortlists are ready before the first interview.",
      },
    ],
  },

  faqSection: {
    // FAQ section title (26 characters max)
    title: "Frequently Asked Questions",
    // FAQ section description (120 characters max)
    description:
      "Answers to common questions about Your App and its features. If you have any other questions, please don't hesitate to contact us.",
    items: [
      {
        // FAQ question 1 (19 characters max)
        question: "What is an AI Agent?",
        // FAQ answer 1 (228 characters max)
        answer:
          "An AI Agent is an intelligent software program that can perform tasks autonomously, learn from interactions, and make decisions to help achieve specific goals. It combines artificial intelligence and machine learning to provide personalized assistance and automation.",
      },
      {
        // FAQ question 2 (24 characters max)
        question: "How does Your App work?",
        // FAQ answer 2 (248 characters max)
        answer:
          "Your App works by analyzing your requirements, leveraging advanced AI algorithms to understand context, and executing tasks based on your instructions. It can integrate with your workflow, learn from feedback, and continuously improve its performance.",
      },
      {
        // FAQ question 3 (23 characters max)
        question: "How secure is my data?",
        // FAQ answer 3 (213 characters max)
        answer:
          "We implement enterprise-grade security measures including end-to-end encryption, secure data centers, and regular security audits. Your data is protected according to industry best practices and compliance standards.",
      },
      {
        // FAQ question 4 (35 characters max)
        question: "Can I integrate my existing tools?",
        // FAQ answer 4 (198 characters max)
        answer:
          "Yes, Your App is designed to be highly compatible with popular tools and platforms. We offer APIs and pre-built integrations for seamless connection with your existing workflow tools and systems.",
      },
      {
        // FAQ question 5 (32 characters max)
        question: "Is there a free trial available?",
        // FAQ answer 5 (154 characters max)
        answer:
          "Yes, we offer a 14-day free trial that gives you full access to all features. No credit card is required to start your trial, and you can upgrade or cancel at any time.",
      },
      {
        // FAQ question 6 (30 characters max)
        question: "How does Your App save me time?",
        // FAQ answer 6 (213 characters max)
        answer:
          "Your App automates repetitive tasks, streamlines workflows, and provides quick solutions to common challenges. This automation and efficiency can save hours of manual work, allowing you to focus on more strategic activities.",
      },
    ],
  },

  ctaSection: {
    // CTA section headline (26 characters max)
    title: "Automate. Simplify. Thrive",
    button: {
      // CTA button label — match brand.cta (11 characters max)
      text: "Get Started",
    },
    // CTA subtext under button (32 characters max)
    subtext: "Streamline your workflow today",
  },
} as const;

export type SiteCopy = typeof siteCopy;
