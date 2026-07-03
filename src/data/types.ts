export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
  membersOnly?: boolean;
  section?: "projects" | "blogs";
  link?: string;
}

export interface SourceItem {
  id: string;
  label: string;
  description: string;
  /** lucide-react icon name */
  icon:
    | "BookOpen"
    | "FileText"
    | "File"
    | "Image"
    | "FileAudio"
    | "Video";
  comingSoon?: boolean;
}

export interface Experience {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  thesis?: {
    title: string;
    citation?: string;
  };
  body?: string;
}

export interface Profile {
  label: string;
  url: string;
}

export interface ExpertiseGroup {
  group: string;
  items: string[];
}

export interface AboutData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  badges: string[];
  expertise?: ExpertiseGroup[];
  profiles: Profile[];
  bio: string;
}
