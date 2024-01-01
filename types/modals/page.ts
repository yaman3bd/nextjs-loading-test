
export type TextBlockFields = {
  title: string;
  content: string;
  subtitle: string;
};
export type ImageBlockFields = {
  title: string;
  content: string;
  img_url: string;
  position: "top" | "right" | "bottom" | "left";
};
export type VideoBlockFields = {
  title: string;
  content: string;
  video_url: string;
  position: "top" | "right" | "bottom" | "left";
};
export type CtaBlockFields = {
  title: string;
  buttons: Array<{
    url: string | null;
    type: "add-to-cart" | "checkout" | "login-modal" | null;
    color: string | null;
    label: string;
    target: "_blank" | string | null;
    product?: `Course-${string}` | `Product-${string}`;
  }>;
  content: string;
};
export type FeaturesBlockFields = {
  col: number;
  title: string;
  content: string;
  features: Array<{ icon: string; title: string; description: string }>;
};
export type CoursesBlockFields = {
  col: number;
  title: string;
  content: string;
  courses: Array<number> | null;
};
export type ChaptersBlockFields = {
  title: string;
  content: string;
  course: number;
};
export type ReviewsBlockFields = {
  col: number;
  title: string;
  content: string;
  courses: Array<number>;
};
export type FaqBlockFields = {
  title: string;
  content: string;
  questions: Array<{
    title: string;
    content: string;
  }>;
};

export type ArticlesBlockFields = {
  col: number;
  title: string;
  content: string;
  articles: Array<number> | null;
};
export type ProductsBlockFields = {
  col: number;
  title: string;
  content: string;
  products: Array<number> | null;
};
export type HtmlBlockFields = {
  html: string;
};
export type ContactFormBlockFields = {
  title: string;
  subtitle: string;
};

type BlockKey =
  | "text"
  | "image"
  | "video"
  | "cta"
  | "features"
  | "courses"
  | "chapters"
  | "reviews"
  | "faq"
  | "articles"
  | "products"
  | "html"
  | "contact-form";
export type PageBlock<T extends BlockKey> = {
  data: any;
  fields_values: T extends "text"
    ? TextBlockFields
    : T extends "image"
    ? ImageBlockFields
    : T extends "video"
    ? VideoBlockFields
    : T extends "cta"
    ? CtaBlockFields
    : T extends "features"
    ? FeaturesBlockFields
    : T extends "courses"
    ? CoursesBlockFields
    : T extends "chapters"
    ? ChaptersBlockFields
    : T extends "reviews"
    ? ReviewsBlockFields
    : T extends "faq"
    ? FaqBlockFields
    : T extends "articles"
    ? ArticlesBlockFields
    : T extends "products"
    ? ProductsBlockFields
    : T extends "html"
    ? HtmlBlockFields
    : T extends "contact-form"
    ? ContactFormBlockFields
    : never;
  id: string;
  key: T;
  name: string;
  styles: any & {
    custom: string;
  };
};

export type Page = {
  id: number;
  slug: string;
  title: string;
  deletable: boolean;
  mode: null | "default" | "body" | "blank";
  meta_description: string;
  meta_keywords: Array<string>;
  blocks: Array<PageBlock<any>>;
  created_at: string;
  updated_at: string;
};
