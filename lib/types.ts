export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  images: string[];
  tags: string[];
  details?: {
    client?: string;
    role?: string;
    deliverables?: string[];
  };
}
