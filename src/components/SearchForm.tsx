import { IconSearch, IconX, IconZoom } from "@tabler/icons-react";
import type React from "react";
import { useId, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useLocation } from "wouter";
import { handleChange, handleSubmit } from "@/handlers/index.ts";
import { useFilters } from "@/hooks/index.ts";
import { clearFilters, clearSearchInput } from "@/utils/index.ts";

export const SearchForm = () => {
    const [location, navigate] = useLocation();

    const searchInputRef = useRef<HTMLInputElement>(null);

    const textId = useId();
    const categoryId = useId();
    const priceId = useId();

    const { textToFilter, setTextToFilter, filters, setFilters } = useFilters();
    const debouncedSetTextToFilter = useDebouncedCallback(
        (value) => setTextToFilter(value),
        600,
    );

    const handleFormChange = (event: React.FormEvent) => {
        handleChange(
            event,
            location,
            textId,
            categoryId,
            priceId,
            debouncedSetTextToFilter,
            setFilters,
        );
    };

    return (
        <search className="w-full max-w-3xl">
            <form
                onSubmit={(event: React.FormEvent) =>
                    handleSubmit(event, location, textId, navigate)
                }
                onChange={handleFormChange}
                className="flex flex-col gap-4 p-2 text-text-primary"
            >
                <section className="flex justify-between items-center gap-1 p-2 outline-border has-focus:outline-primary-light hover:outline-primary-light outline-1 transition-colors rounded-xl bg-bg-tertiary outline-offset-2">
                    {location === "/search" && <IconZoom />}
                    <input
                        name={textId}
                        ref={searchInputRef}
                        className="w-full outline-none p-1"
                        type="text"
                        placeholder="Jacket, SSD..."
                        defaultValue={textToFilter}
                    />
                    {location !== "/search" && (
                        <button type="submit">
                            <IconSearch />
                        </button>
                    )}
                    {textToFilter && (
                        <button
                            type="button"
                            onClick={() => clearSearchInput(searchInputRef, setTextToFilter)}
                        >
                            <IconX
                                size={32}
                                className="border border-white/60 rounded-lg cursor-pointer p-1"
                            />
                        </button>
                    )}
                </section>
                {location === "/search" && (
                    <section className="flex flex-wrap gap-4 justify-start items-center">
                        <select
                            className="bg-bg-tertiary p-1 rounded-md outline-border has-focus:outline-primary-light hover:outline-primary-light outline-1 outline-offset-2 transition-all"
                            name={categoryId}
                            value={filters.category}
                            onChange={handleFormChange}
                        >
                            <option value="">Category</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                            <option value="women's clothing">Women's Clothing</option>
                        </select>
                        <div className="flex flex-col">
                            <span className="text-text-tertiary">${filters.price}</span>
                            <input
                                type="range"
                                name={priceId}
                                min={0}
                                max={999}
                                value={filters.price}
                                onChange={handleFormChange}
                            />
                        </div>
                        {(filters.category || filters.price !== 0) && (
                            <button type="button" onClick={() => clearFilters(setFilters)}>
                                <IconX
                                    size={28}
                                    className="border border-white/60 rounded-lg cursor-pointer p-1"
                                />
                            </button>
                        )}
                    </section>
                )}
            </form>
        </search>
    );
};
