export interface NavigationItem {
  label: string;
  section_id: string;
  cta_button?: boolean;
}

export interface NavigationProps {
  items: NavigationItem[];
  onNavigate?: (sectionId: string) => void;
}
