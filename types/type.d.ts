export type Service = {
  href: string;
  name: string;
  description: string;
  imageSrc: string;
};
export type FaqCommon = {
  question: string;
  answer: string;
};

export type User = {
  name: string;
  id: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Response = {
  name: string;
  id: string;
  email: string;
  message: string;
  phone: string;
  interest: string;
  createdAt: Date;
};

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  service: string;
  avatar?: string | null;
  avatarID?: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
