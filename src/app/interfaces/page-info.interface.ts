

export interface PageInfo {
  title?: string;
  email?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  teamDbUrl?: string;
  team?: Team[];
}

export interface Team {
  description?: string;
  member?: string;
  title?: string;
  twitter?: string;
  url?: string;
}