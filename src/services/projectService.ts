import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);
    
    // HTTP durumunu kontrol et (response.ok kontrolü zorunludur) [cite: 1005, 431]
    if (!response.ok) {
      throw new Error(`Projeler yuklenemedi: ${response.status}`);
    }

    const data: Project[] = await response.json();
    return data;
    
  } catch (error) {
    console.error("Veri cekme hatasi:", error);
    throw error; // Hatayı bileşene (yukarı) ilet [cite: 1028]
  }
}