// 型定義
export interface Work {
  id: number;
  slug: string;
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
    article_image?: string;
    article_title?: string;
    article_text?: string;
  };
}
