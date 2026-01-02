import { Loader, ProductCard, SearchForm } from "@/components/index.ts";
import { useProducts } from "@/hooks/index.ts";
import type { Product } from "@/interfaces/index.ts";
import { useSearchStore } from "@/store/index.ts";

const Search = () => {
    const textToFilter = useSearchStore((state) => state.textToFilter);
    const filters = useSearchStore((state) => state.filters);

    const { filteredProducts, loadingAllProducts } = useProducts(
        textToFilter,
        filters,
    );

    const showingProducts = filteredProducts.length ? filteredProducts : [];

    const title = loadingAllProducts
        ? "Fake Store: Loading..."
        : `Fake Store: ${textToFilter ? textToFilter.concat(" - ") : ""}${showingProducts.length ? "Results (".concat(showingProducts.length.toString()).concat(")") : "No results"}`;

    return (
        <main className="flex flex-col items-center bg-bg-secondary animate-in grow fade-in-25 duration-500">
            <title>{title}</title>
            <h1 className="text-h1-responsive p-2 text-text-primary">
                Search for any product!
            </h1>
            <SearchForm />
            <section className="flex flex-col w-full place-items-center gap-4 p-4">
                {loadingAllProducts ? (
                    <Loader />
                ) : filteredProducts.length ? (
                    showingProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h2 className="m-auto text-text-primary tracking-widest text-h2-responsive">
                        No products :(
                    </h2>
                )}
            </section>
        </main>
    );
};

export default Search;
