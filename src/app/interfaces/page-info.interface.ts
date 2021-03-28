

export interface PageInfo {
  title?: string;
  email?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  team?: Team[];
}

interface Team {
  name?: string;
  email?: string;
}