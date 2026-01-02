import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import type { Filters } from "@/interfaces/index.ts";

interface searchStore {
    textToFilter: string;
    filters: Filters;
    setTextToFilter: (newTextToFilter: string) => void;
    setFilters: (newFilters: Filters) => void;
}

export const useSearchStore = create<searchStore>()(
    subscribeWithSelector((set) => ({
        textToFilter: "",
        filters: {
            category: "",
            price: 0,
        },
        setTextToFilter: (newTextToFilter: string) =>
            set({ textToFilter: newTextToFilter }),
        setFilters: (newFilters: Filters) =>
            set({
                filters: { category: newFilters.category, price: newFilters.price },
            }),
    })),
);
