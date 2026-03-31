// Kategori tipleri [cite: 725-729]
export type Category = "frontend" | "fullstack" | "backend";

// Sıralama seçenekleri [cite: 730-732]
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

// Proje veri modeli [cite: 735-758]
export interface Project {
  readonly id: number; // id değiştirilemez [cite: 739]
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
  demoUrl?: string; // Opsiyonel alan [cite: 754]
  sourceUrl?: string; // Opsiyonel alan [cite: 756]
}

// Filtre durumu [cite: 761-775]
export interface FilterState {
  search: string;
  category: Category | "all";
  sortField: SortField;
  sortOrder: SortOrder;
}