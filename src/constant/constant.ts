import { Project, Service, Skill, Testimonial } from "../types/type";
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  PenTool,
  Megaphone,
  BarChart,
} from "lucide-react";

export const skills: Skill[] = [
  { name: "Web Development", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "Digital Marketing", level: 85 },
  { name: "Branding", level: 80 },
  { name: "SEO Optimization", level: 85 },
  { name: "Mobile App Development", level: 75 },
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/DJPanwar", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/deepakpanwar/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/deepak512panwar", label: "Twitter" },
];

export const navigationItems = [
  "Home",
  "Services",
  "Portfolio",
  "About",
  "Testimonials",
  "Contact",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "web",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A modern e-commerce platform with a seamless shopping experience.",
    link: "#",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "design",
    image:
      "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Complete brand identity design including logo, colors, and guidelines.",
    link: "https://www.figma.com/design/gEpazLDCtHVBwHeXLeFiNn/Untitled?t=Q4bWofTCcgd20uQu-1",
  },
  {
    id: 3,
    title: "SEO Campaign",
    category: "marketing",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Successful SEO campaign resulting in 300% traffic increase.",
    link: "#",
  },
  {
    id: 4,
    title: "Mobile Application",
    category: "web",
    image:
      "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Intuitive mobile app with cross-platform functionality.",
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Strategy",
    category: "marketing",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Comprehensive social media strategy for brand growth.",
    link: "https://www.figma.com/design/2MEV8NJLbqZM3UmTwCjUV7/Untitled?node-id=0-1&t=N11vNiTXA8ays4Qo-1",
  },
  {
    id: 6,
    title: "UI/UX Redesign",
    category: "design",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Complete redesign of user interface improving conversion rates.",
    link: "https://www.figma.com/design/mJ2ujjUkP2BRPHRHfcYf25/Untitled?node-id=0-1&t=6HEqNSHmCMUrppYc-1",
  },
];

export const ServicesData: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. Responsive, fast, and user-friendly solutions tailored to your specific needs.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that enhance user experience. From wireframes to final designs, creating interfaces that users love to interact with.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns to boost your online presence. SEO, content marketing, and social media strategies to reach your target audience.",
  },
  {
    icon: BarChart,
    title: "Analytics & SEO",
    description:
      "Data-driven optimization to increase visibility and performance. Comprehensive analysis and implementation of SEO best practices.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ankit Singhal",
    position: "Software Engineer",
    company: "TCS",
    avatar:
      "/public/assets/Ankit Singhal.png",
    text: "Working with this freelancer was an absolute pleasure. They delivered a website that exceeded our expectations and has significantly improved our online presence. Their attention to detail and ability to translate our vision into reality was impressive.",
  },
  {
    id: 2,
    name: "Sankalp Haritash",
    position: "Student",
    company: "",
    avatar:
      "/public/assets/Sankalp Haritash.jpg",
    text: "The SEO and marketing strategy developed for our brand was nothing short of brilliant. Our organic traffic increased by 200% in just three months, and our conversion rates have improved dramatically. Highly recommend their services.",
  },
  {
    id: 3,
    name: "Manjeet Agarwal",
    position: "Software Developer",
    company: "Fiftyfive Technologies",
    avatar:
      "/assets/Manjeet Agarwal.jpg",
    text: "The brand identity created for my boutique perfectly captures our essence. From logo design to color palette, every element aligns with our vision. They truly understood what we needed and delivered beyond our expectations.",
  },
];
