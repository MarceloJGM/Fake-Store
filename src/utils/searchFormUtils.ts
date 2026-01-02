import type { Filters, Setters } from "@/interfaces/index.ts";

export const clearSearchInput = (
    ref: React.RefObject<HTMLInputElement | null>,
    setTextToFilter: Setters["setTextToFilter"],
) => {
    if (ref.current) {
        ref.current.value = "";
        setTextToFilter(ref.current.value);
    }
};

export const clearFilters = (setFilters: Setters["setFilters"]) => {
    const newFilters: Filters = {
        category: "",
        price: 0,
    };

    setFilters(newFilters);
};
