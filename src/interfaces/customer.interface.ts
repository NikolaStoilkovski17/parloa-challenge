import { Project } from "./project.interface";

export interface Customer {
  id: string;
  company: string;
  about: string;
  industry: string;
  isActive: boolean;
  projects: Project[] | [];
}
