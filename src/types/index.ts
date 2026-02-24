/**
 * Global Type Definitions for PLA.TONE
 */

// Project Types
export interface ProjectSpecs {
  series?: string;
  scale?: string;
  buildTime?: string;
  paintFinish?: string;
}

export interface ProjectImage {
  url: string;
  alt?: string;
}

export interface ProjectGalleryItem {
  image: ProjectImage | string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  specs?: ProjectSpecs;
  price?: number;
  status?: 'in_stock' | 'sold_out' | 'commission';
  mainImage?: ProjectImage;
  gallery?: ProjectGalleryItem[];
  artist?: string;
  year?: string;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Global Data Types
export interface StatItem {
  label: string;
  value: string;
}

export interface StatsGlobal {
  items?: StatItem[];
}

export interface HeroCustomContent {
  title?: string;
  subtitle?: string;
  image?: ProjectImage;
  link?: string;
}

export interface HeroGlobal {
  type?: 'project' | 'custom';
  project?: Project | string;
  customContent?: HeroCustomContent;
}

// Media Types
export interface MediaFile {
  id: string;
  url: string;
  alt?: string;
  filename?: string;
}

// Order Types
export interface Order {
  id: string;
  date: string;
  item: string;
  status: 'PENDING' | 'PROCESSING' | 'BUILDING' | 'SHIPPED' | 'DELIVERED';
  price: string;
}

// Commission Types
export interface Commission {
  id: string;
  title: string;
  stage: 'DEPOSIT_RECEIVED' | 'IN_PROGRESS' | 'COMPLETED';
  update: string;
}

// Inquiry Types
export interface Inquiry {
  id: string;
  name?: string;
  email: string;
  message?: string;
  status?: 'unread' | 'read' | 'replied';
  createdAt?: string;
}

// API Response Types
export interface ApiResponse<T> {
  code: number;
  message: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
