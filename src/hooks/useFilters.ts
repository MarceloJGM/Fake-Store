import { useEffect } from "react";
import { useLocation, useSearchParams } from "wouter";
import { useSearchStore } from "@/store/index.ts";

export const useFilters = () => {
    const [_, navigate] = useLocation();
    const [searchParams] = useSearchParams();

    const textToFilter = useSearchStore((state) => state.textToFilter);
    const setTextToFilter = useSearchStore((state) => state.setTextToFilter);

    const filters = useSearchStore((state) => state.filters);
    const setFilters = useSearchStore((state) => state.setFilters);

    useEffect(() => {
        setTextToFilter(searchParams.get("text") || "");
        setFilters({
            category: searchParams.get("category") || "",
            price: Number(searchParams.get("price")) || 0,
        });
    }, [searchParams.get, setTextToFilter, setFilters]);

    useEffect(() => {
        const params = new URLSearchParams();

        if (textToFilter) params.append("text", textToFilter);
        if (filters.category) params.append("category", filters.category);
        if (filters.price) params.append("price", filters.price.toString());

        const newUrl = params.toString()
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname;

        navigate(newUrl, { replace: true });
    }, [textToFilter, filters, navigate]);

    return {
        filters,
        setFilters,
        textToFilter,
        setTextToFilter,
    };
};
