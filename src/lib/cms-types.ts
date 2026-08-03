import type { L } from "./i18n";

export interface NewsItem {
  id: string;
  date: string;
  title: L;
  excerpt: L;
  tag: L;
  image?: string;
}

export interface DocumentItem {
  id: string;
  title: L;
  type: string;
  description: L;
  url: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: L;
  caption?: L;
}

export interface PageContent {
  id: string;
  slug: string;
  title: L;
  content: L;
  metaDescription?: L;
}

export interface CmsContent {
  news: NewsItem[];
  documents: DocumentItem[];
  gallery: GalleryItem[];
  pages: PageContent[];
}

export const defaultCmsContent: CmsContent = {
  news: [],
  documents: [],
  gallery: [],
  pages: [],
};
