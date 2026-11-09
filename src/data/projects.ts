export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Full-Stack Web App" | "Web Application & APIs" | "Academic Research & NLP";
  badge: string;
  image: string;
  shortDescription: string;
  fullOverview: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
    databaseAuth?: string[];
    researchNLP?: string[];
    all: string[];
  };
  features: string[];
  myContribution?: string;
  challenges: {
    title: string;
    description: string;
  }[];
  futureImprovements: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "booknook",
    title: "BookNook",
    tagline: "A Small Online Library & Community Book Management Platform",
    category: "Full-Stack Web App",
    badge: "Full-Stack Web Application",
    image: "/projects/booknook.png",
    shortDescription:
      "An online library platform where readers can explore books, view book details, add and manage book listings, borrow available books, and manage their borrowing history.",
    fullOverview:
      "BookNook is an online library platform developed with Next.js, React, and TypeScript on the client and Express.js and MongoDB on the backend. The platform provides a streamlined experience for book discovery, catalog browsing, member book contributions, and tracking borrowing activities with real-time availability states.",
    liveUrl: "https://booknook-frontend-six.vercel.app",
    githubUrl: "https://github.com/NusrathChowdhury/BookNook-Client",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      backend: ["Express.js", "REST APIs"],
      databaseAuth: ["MongoDB", "Better Auth", "JOSE/JWT"],
      all: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Express.js",
        "MongoDB",
        "Better Auth",
        "JOSE/JWT",
      ],
    },
    features: [
      "Catalog exploration with real-time search and genre category filtering.",
      "Book details view with metadata, availability status, and summary descriptions.",
      "User authentication and protected routes using Better Auth and JOSE/JWT session tokens.",
      "Book contribution interface allowing authenticated members to add and manage listings.",
      "Borrowing management dashboard to track active loans and return timelines.",
    ],
    myContribution:
      "Developed the complete client-side application using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Integrated authentication workflows using Better Auth and JOSE/JWT, and connected client interfaces with backend Express.js REST API endpoints.",
    challenges: [
      {
        title: "Borrow State Consistency",
        description:
          "Managing dynamic inventory availability states to ensure that active borrowing records immediately update across browsing views without stale reads.",
      },
      {
        title: "Type-Safe Authentication & Token Flow",
        description:
          "Configuring secure token persistence and middleware protection with Better Auth and JOSE/JWT while maintaining seamless client-side navigation in Next.js.",
      },
    ],
    futureImprovements: [
      "Reader review and star rating system for individual titles.",
      "Automated email notifications prior to borrowing return due dates.",
      "Personalized book recommendations based on user borrowing history.",
    ],
  },
  {
    id: "2",
    slug: "bazardor",
    title: "Bazar Dor",
    tagline: "Market Price Information Platform for Daily Commodities",
    category: "Web Application & APIs",
    badge: "Web Application",
    image: "/projects/bazardor.png",
    shortDescription:
      "A Bengali-focused market price information platform that helps users explore essential commodity prices, compare prices, browse categories, and understand price changes.",
    fullOverview:
      "Bazar Dor is a localized web application created to offer transparent market price data for daily essential items across Bangladesh. Built with Next.js, React, and TypeScript, the platform provides intuitive category navigation, price comparisons across essential goods, and search capabilities optimized for Bengali queries.",
    liveUrl: "https://bazardor-gamma-blue.vercel.app",
    githubUrl: "https://github.com/NusrathChowdhury/Bazar_Dor",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["REST APIs"],
      databaseAuth: ["Better Auth"],
      all: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Better Auth",
        "REST APIs",
      ],
    },
    features: [
      "Bengali-localized user interface designed for intuitive navigation and accessibility.",
      "Categorized commodity explorer covering vegetables, grains, oils, fish, poultry, and spices.",
      "Real-time commodity search and filter functionality optimized for Bengali terminology.",
      "Price comparison views helping consumers observe price shifts across staple goods.",
      "Authenticated contributor access managed through Better Auth for verified price updates.",
    ],
    myContribution:
      "Architected the Next.js frontend with TypeScript and Tailwind CSS, developed the Bengali-focused UI components, integrated dynamic REST API feeds for commodity pricing, and implemented Better Auth for secure contributor access.",
    challenges: [
      {
        title: "Handling Localized Bengali Text & Numeric Formats",
        description:
          "Implementing consistent parsing and search indexing for Bengali characters and numerical price figures across diverse category listings.",
      },
      {
        title: "Optimized Mobile Performance",
        description:
          "Ensuring fast initial load times and smooth rendering across entry-level mobile devices on regional network connections.",
      },
    ],
    futureImprovements: [
      "Historical price fluctuation graphs and 30-day visual price trend tracking.",
      "Regional division-based market comparison filters (e.g., Sylhet, Dhaka, Chittagong).",
      "Daily commodity price summary notifications via web push.",
    ],
  },
  {
    id: "3",
    slug: "bangla-cropassist",
    title: "Bangla CropAssist",
    tagline: "Multi-Crop Disease Detection & Treatment Advisory Research",
    category: "Academic Research & NLP",
    badge: "Research & NLP Initiative",
    image: "/projects/bangla-cropassist.png",
    shortDescription:
      "A Bangla-language agricultural disease detection research project covering rice, potato and lentil. It helps users provide crop symptoms in Bangla and receive disease identification and treatment guidance.",
    fullOverview:
      "Bangla CropAssist is an applied Natural Language Processing research initiative designed to assist agricultural communities in Bangladesh. By analyzing natural language symptom descriptions written in Bengali, the platform classifies diseases affecting three staple crops—rice, potato, and lentil—and provides actionable localized treatment recommendations.",
    liveUrl: "https://huggingface.co/spaces/CRop-p/bangla-crop-disease",
    technologies: {
      researchNLP: [
        "Python",
        "NLP",
        "BanglaBERT",
        "LSTM",
        "Machine Learning",
        "Hugging Face Spaces",
      ],
      all: [
        "Python",
        "NLP",
        "BanglaBERT",
        "LSTM",
        "Machine Learning",
        "Hugging Face Spaces",
      ],
    },
    features: [
      "Natural language symptom input interface hosted live on Hugging Face Spaces.",
      "Covers 3 vital national crops: Rice (ধান), Potato (আলু), and Lentil (মসুর ডাল).",
      "Classification spanning 34 distinct agricultural crop disease conditions.",
      "Actionable treatment guidance provided alongside identified disease predictions.",
      "Underpinned by a comprehensive 73,000+ sample Bengali agricultural dataset.",
    ],
    myContribution:
      "Contributed to comprehensive dataset development and curation—sourcing, cleaning, and verifying over 73,000 localized Bangla agricultural symptom descriptions across 34 classes—and actively contributed to research paper preparation. The research paper has been submitted and is currently under review. (Note: Machine learning model code and algorithmic implementation was developed by research collaborators).",
    stats: [
      { label: "Curated Descriptions", value: "73,000+" },
      { label: "Disease Classes", value: "34" },
      { label: "Crops Covered", value: "3 (Rice, Potato, Lentil)" },
      { label: "Proposed Model Accuracy", value: "98.96%" },
    ],
    challenges: [
      {
        title: "Large-Scale Agricultural Corpus Curation in Bengali",
        description:
          "Standardizing and verifying colloquial farming symptom descriptions across regional language variations to ensure clean training data for the model.",
      },
      {
        title: "Class Balance Across 34 Disease Categories",
        description:
          "Structuring balanced sample distributions across 34 disease categories across rice, potato, and lentil to prevent training bias.",
      },
    ],
    futureImprovements: [
      "Expanding dataset coverage to additional crops such as jute, wheat, and vegetables.",
      "Exploring spoken voice input integration in colloquial Bangla for enhanced accessibility.",
      "Developing an offline-capable reference companion for agricultural extension workers.",
    ],
  },
];
