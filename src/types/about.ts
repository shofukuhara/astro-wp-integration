// 型定義
export interface About {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url: string }];
  };
  acf?: {
    article_company?: string;
    article_address?: string;
    article_telephone?: string;
    article_description?: string;
    article_image?: string;
  };
}
