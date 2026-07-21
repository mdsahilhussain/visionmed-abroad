export interface MbbsCountryData {
  slug: string;
  countryName: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  breadcrumb: Array<{ name: string; href: string }>

  hero: {
    title: string;
    subtitle: string;
    cta: string;
    highlights: string[];
    /** optional hero background image path; falls back to a gradient if omitted */
    image?: string;
  };

  overview: {
    title: string;
    description: string;
  };

  quickFacts: {
    duration: string;
    medium: string;
    eligibility: string;
    neet: string;
    annualFees: string;
    livingCost: string;
    intake: string;
    currency: string;
    capital: string;
  };

  advantages: Array<{
    title: string;
    description: string;
  }>;

  eligibility: {
    minimumAge: string;
    education: string;
    minimumMarks: string;
    neet: string;
    english: string;
  };

  admissionProcess: string[];

  requiredDocuments: string[];

  curriculum: {
    duration: string;
    structure: string[];
    description: string;
  };

  recognition: string[];

  careerOpportunities: {
    title: string;
    description: string;
  };

  studentLife: {
    accommodation: string;
    food: string;
    transport: string;
    safety: string;
  };

  climate: {
    summer: string;
    winter: string;
    description: string;
  };

  indianCommunity: {
    description: string;
  };

  visa: {
    type: string;
    processing: string;
    renewal: string;
  };
}