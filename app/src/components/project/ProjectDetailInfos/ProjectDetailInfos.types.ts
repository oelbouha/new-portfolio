export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectDetailInfosProps {
  credits?: ProjectCredit[];
  services: string[];
  client?: string;
  year: string;
  tags?: string[];
}
