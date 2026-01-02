import {
    IconCategory,
    IconCurrencyDollar,
    IconMoodPuzzled,
    IconShoppingCartCancel,
    IconShoppingCartPlus,
    IconStarFilled,
} from "@tabler/icons-react";
import { Link, useParams } from "wouter";
import { Loader } from "@/components/index.ts";
import { handleAddProduct, handleRemoveProduct } from "@/handlers/index.ts";
import { useProducts } from "@/hooks/index.ts";
import { useCartStore } from "@/store/index.ts";

const ProductDetails = () => {
    const { id } = useParams();
    const { productDetails, loadingProductDetails } = useProducts(
        "",
        undefined,
        id,
    );

    const cartProducts = useCartStore((state) => state.products);
    const cartSection = cartProducts.some(
        (product) => product.productId === productDetails?.id,
    );

    const addProduct = useCartStore((state) => state.addProduct);
    const removeProduct = useCartStore((state) => state.removeProduct);

    const handleAddToCart = (event: React.MouseEvent) => {
        handleAddProduct(event, addProduct);
    };

    const handleRemoveFromCart = (event: React.MouseEvent) => {
        handleRemoveProduct(event, removeProduct);
    };

    const title = loadingProductDetails
        ? "Fake Store: Loading..."
        : !productDetails
            ? "Fake Store: Product Not Found"
            : `Fake Store: ${productDetails.title}`;

    if (loadingProductDetails) {
        return (
            <>
                <title>{title}</title>
                <Loader />
            </>
        );
    }

    if (productDetails) {
        return (
            <main className="flex justify-center grow animate-in fade-in-25 duration-500">
                <title>{title}</title>
                <article
                    id={productDetails.id.toString()}
                    className="flex flex-wrap justify-between max-w-200 border-border border-2 m-4 rounded-md shadow-bg-tertiary shadow-xs"
                >
                    <figure className="flex justify-center shrink-0 bg-text-primary w-full rounded-t-md">
                        <img
                            className="max-w-full max-h-75 p-4"
                            src={productDetails.image}
                            alt={productDetails.image}
                        />
                    </figure>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <section className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-h2-responsive text-text-primary">
                                    {productDetails.title}
                                </h2>
                                <p className="text-text-secondary text-pretty">
                                    {productDetails.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                    <IconCategory color="#4CC9F0" />
                                    <strong className="flex items-center text-text-tertiary">
                                        Category: {productDetails.category}
                                    </strong>
                                </div>
                                <div className="flex items-center gap-1">
                                    <IconCurrencyDollar color="#4CAF50" />
                                    <strong className="flex items-center text-text-tertiary">
                                        Price: {productDetails.price}
                                    </strong>
                                </div>
                                <div className="flex items-center gap-1">
                                    <IconStarFilled color="#FFD700" />
                                    <strong className="flex items-center text-text-tertiary">
                                        Rating: {productDetails.rating.rate}
                                    </strong>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-wrap gap-2 p-1">
                            {cartSection ? (
                                <button
                                    className="flex items-center gap-1 p-2 rounded-full cursor-pointer truncate bg-warning"
                                    type="button"
                                    onClick={handleRemoveFromCart}
                                >
                                    <IconShoppingCartCancel />
                                    Remove From Cart
                                </button>
                            ) : (
                                <button
                                    className="flex items-center gap-1 p-2 rounded-full cursor-pointer truncate bg-success"
                                    type="button"
                                    onClick={handleAddToCart}
                                >
                                    <IconShoppingCartPlus />
                                    Add To Cart
                                </button>
                            )}
                        </section>
                    </div>
                </article>
            </main>
        );
    }

    if (!productDetails) {
        return (
            <main className="text-text-primary flex flex-col gap-2 items-center tracking-widest m-auto">
                <title>{title}</title>
                <div className="flex gap-2 items-center">
                    <h2 className="text-h2-responsive">Product not found</h2>
                    <IconMoodPuzzled size={32} />
                </div>

                <Link
                    href="/search"
                    className="hover:bg-black hover:text-primary transition-colors text-xl border border-black rounded-full p-2 tracking-widest"
                >
                    Go To Search
                </Link>
            </main>
        );
    }
};

export default ProductDetails;
