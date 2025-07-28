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
    about_us?: string;
    about_mission?: string;
    about_history?: string;
    about_team?: string;
    about_value?: string;
  };
}
