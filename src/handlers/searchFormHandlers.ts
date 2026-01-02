import type React from "react";
import type { Filters, Setters } from "@/interfaces/index.ts";

export const handleSubmit = (
    event: React.FormEvent,
    location: string,
    textId: string,
    navigate: (newUrl: string) => void,
) => {
    event.preventDefault();

    if (location !== "/search") {
        const form = new FormData(event.currentTarget as HTMLFormElement);
        const params = new URLSearchParams();

        if (form.get(textId)) params.append("text", form.get(textId) as string);

        const newUrl = params.toString()
            ? `/search?${params.toString()}`
            : "/search";

        navigate(newUrl);
    }
};

export const handleChange = (
    event: React.FormEvent,
    location: string,
    textId: string,
    categoryId: string,
    priceId: string,
    setTextToFilter: Setters["setTextToFilter"],
    setFilters: Setters["setFilters"],
) => {
    if (location !== "/") {
        const form = (event.currentTarget as HTMLElement).closest(
            "form",
        ) as HTMLFormElement;

        if (!form) return;

        const formData = new FormData(form);

        if ((event.target as HTMLInputElement).name === textId) {
            setTextToFilter(formData.get(textId) as string);
        } else {
            const newFilters: Filters = {
                category: formData.get(categoryId) as string,
                price: Number(formData.get(priceId)),
            };

            setFilters(newFilters);
        }
    }
};
