/// <reference types="react-scripts" />

interface EntryDetails {
  title: string;
  cost: number;
  link: string;
  isReserved: boolean;
  isOpen: boolean;
  entryId: string;
  categoryId: string;
}
interface EntryProps extends EntryDetails {
  toggleProductReservation: toggleEntry;
  toggleProductVisibility: toggleEntry;
}
interface toggleEntry {
  (entryId: string): void;
}

interface CategoryDetails {
  categoryName: string;
  categoryId: string;
  isActive: boolean;
}

interface setActiveCategory {
  (categoryId: string): void;
}

interface CategoryProps extends CategoryDetails {
  toggleProductReservation: toggleEntry;
  toggleProductVisibility: toggleEntry;
  setActiveCategory: setActiveCategory;
  entries: EntryDetails[];
}

interface WshlstDetails {
  categories: CategoryDetails[];
  entries: EntryDetails[];
}

interface filterEntriesByCategory {
  (entries: EntryDetails[], catId: string): EntryDetails[];
}

interface Proxy {
  (): void;
}
