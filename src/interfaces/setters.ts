import type { Filters } from "./filters";

export interface Setters {
    setTextToFilter: (newTextToFilter: string) => void;
    setFilters: (newFilters: Filters) => void;
}
