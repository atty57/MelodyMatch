export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  author: {
    initials: string;
    name: string;
    title: string;
    bgColor: string;
  };
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    icon: "copyright",
    title: "Copyright Protection",
    description: "Ensure your music is properly protected with our comprehensive copyright solutions and verification tools."
  },
  {
    id: 2,
    icon: "file-contract",
    title: "Licensing Management",
    description: "Streamline your licensing processes with automated tools and expert guidance for all music usage scenarios."
  },
  {
    id: 3,
    icon: "coins",
    title: "Royalty Compliance",
    description: "Track, manage, and ensure accurate royalty payments with our advanced monitoring and reporting systems."
  },
  {
    id: 4,
    icon: "globe",
    title: "Global Distribution",
    description: "Navigate international regulations and ensure your music meets distribution requirements in all territories."
  },
  {
    id: 5,
    icon: "shield-alt",
    title: "Content Protection",
    description: "Safeguard your music from unauthorized use with our advanced monitoring and takedown services."
  },
  {
    id: 6,
    icon: "graduation-cap",
    title: "Education & Training",
    description: "Stay informed with our extensive library of resources, webinars, and training programs on music industry compliance."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote: "MusicPliance has transformed how we handle our licensing and royalty compliance. Their tools have saved us countless hours and dramatically reduced our error rate.",
    author: {
      initials: "JD",
      name: "James Donovan",
      title: "Rights Manager, Harmony Records",
      bgColor: "primary"
    }
  },
  {
    id: 2,
    rating: 4.5,
    quote: "As an independent artist, keeping up with all the compliance requirements was overwhelming. MusicPliance simplified everything and now I can focus on creating music.",
    author: {
      initials: "SR",
      name: "Sofia Rodriguez",
      title: "Independent Artist",
      bgColor: "secondary"
    }
  },
  {
    id: 3,
    rating: 5,
    quote: "The directory and resources available through MusicPliance have helped us build valuable industry connections and stay on top of changing regulations.",
    author: {
      initials: "MJ",
      name: "Michael Johnson",
      title: "CEO, Rhythm Works Publishing",
      bgColor: "accent"
    }
  }
];

export const STATS: Stat[] = [
  {
    id: 1,
    value: "5K+",
    label: "Artists Protected"
  },
  {
    id: 2,
    value: "800+",
    label: "Labels Served"
  },
  {
    id: 3,
    value: "120+",
    label: "Countries Covered"
  },
  {
    id: 4,
    value: "98%",
    label: "Compliance Rate"
  }
];
