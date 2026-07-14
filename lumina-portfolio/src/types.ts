export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface Discipline {
  id: string;
  title: string;
  description: string;
  iconName: 'Layers' | 'Code' | 'TrendingUp';
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'Terminal' | 'Layers' | 'Cloud' | 'Zap';
  description: string;
  skills: string[];
}
