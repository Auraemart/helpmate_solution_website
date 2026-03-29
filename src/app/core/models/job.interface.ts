export interface Job {
  id: number;
  title: string;
  company: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  salary: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  applyEmail: string;
  postedDate: string;
  isActive: boolean;
}
