export interface Skill {
  name: string;
  level: number;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}
