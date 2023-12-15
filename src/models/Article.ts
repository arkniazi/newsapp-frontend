export interface Article {
  id: string;
  title: string;
  content: string;
  description: string;
  thumbnail_url?: string | undefined;
  source: string;
  source_url: string;
  published_at: string;
  author?: string | undefined;
  slug: string;
}
