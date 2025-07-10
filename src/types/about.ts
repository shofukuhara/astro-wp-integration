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
}
