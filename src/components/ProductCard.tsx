import {
    IconCircleChevronRight,
    IconCurrencyDollar,
    IconMinus,
    IconPlus,
    IconShoppingCartCancel,
    IconShoppingCartPlus,
    IconStarFilled,
} from "@tabler/icons-react";
import type React from "react";
import { Link, useLocation } from "wouter";
import {
    handleAddProduct,
    handleAddQuantity,
    handleLessQuantity,
    handleRemoveProduct,
} from "@/handlers/index.ts";
import type { CartProduct, Product } from "@/interfaces/index.ts";
import { useCartStore } from "@/store/index.ts";

export const ProductCard = ({
    product,
    cartProduct,
}: {
    product: Product;
    cartProduct?: CartProduct;
}) => {
    const [location] = useLocation();

    const cartProducts = useCartStore((state) => state.products);
    const addProduct = useCartStore((state) => state.addProduct);
    const removeProduct = useCartStore((state) => state.removeProduct);
    const sumQuantity = useCartStore((state) => state.sumQuantity);
    const lessQuantity = useCartStore((state) => state.lessQuantity);

    const { id, title, price, description, image, rating, category } = product;

    const handleAddToCart = (event: React.MouseEvent) => {
        handleAddProduct(event, addProduct);
    };

    const handleRemoveFromCart = (event: React.MouseEvent) => {
        handleRemoveProduct(event, removeProduct);
    };

    const handleSumQuantity = (event: React.MouseEvent) => {
        handleAddQuantity(event, sumQuantity);
    };

    const handleMinusQuantity = (event: React.MouseEvent) => {
        handleLessQuantity(event, lessQuantity);
    };

    const cartSection = cartProducts.some((product) => product.productId === id);

    return (
        <article
            id={id.toString()}
            className="flex bg-bg-primary/80 w-full max-w-300 min-h-48 gap-2 rounded-md border border-border/80 shadow-xs shadow-border/60"
        >
            <figure className="relative flex items-center w-[50%] max-w-50 bg-text-primary rounded-l-md">
                <img
                    className="w-full h-full aspect-square object-contain p-2 mx-auto"
                    src={image}
                    alt="Producto"
                    loading="lazy"
                />
                <p className="absolute bottom-0 left-0 rounded-bl-md p-0.5 bg-info text-text-primary first-letter:uppercase">
                    {category}
                </p>
            </figure>
            <div className="flex flex-col justify-around overflow-hidden w-full h-full gap-4 p-2">
                <section className="flex flex-col gap-1">
                    <h3 className="text-h3-responsive text-text-primary truncate">
                        {title}
                    </h3>
                    <span className="text-[14px] text-text-secondary truncate">
                        {description}
                    </span>
                </section>
                <section className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1">
                        <IconCurrencyDollar color="#4CAF50" />
                        <strong className="text-text-tertiary">{price}</strong>
                    </div>
                    <div className="flex items-center gap-1">
                        <IconStarFilled color="#FFD700" />
                        <strong className="text-text-tertiary">{rating.rate}</strong>
                    </div>
                </section>
                <section className="flex flex-wrap gap-2 p-1">
                    {location === "/cart" && (
                        <div className="flex items-center gap-2 text-text-secondary">
                            <button
                                type="button"
                                onClick={handleMinusQuantity}
                                disabled={cartProduct?.quantity === 1}
                                className={`${cartProduct?.quantity === 1 ? "cursor-not-allowed" : "hover:text-text-primary transition-colors cursor-pointer"}`}
                            >
                                <IconMinus />
                            </button>
                            <p>{cartProduct?.quantity}</p>
                            <button
                                type="button"
                                onClick={handleSumQuantity}
                                className="cursor-pointer hover:text-text-primary transition-colors"
                            >
                                <IconPlus />
                            </button>
                        </div>
                    )}
                    {cartSection ? (
                        <button
                            className="flex items-center gap-1 p-2 rounded-full cursor-pointer truncate bg-warning "
                            type="button"
                            onClick={handleRemoveFromCart}
                        >
                            <IconShoppingCartCancel />
                            Remove
                        </button>
                    ) : (
                        <button
                            className="flex items-center hover:animate-pulse gap-1 p-2 rounded-full cursor-pointer truncate bg-success"
                            type="button"
                            onClick={handleAddToCart}
                        >
                            <IconShoppingCartPlus />
                            Add
                        </button>
                    )}
                    <Link
                        className="flex items-center gap-1 bg-info truncate p-2 rounded-full"
                        href={`/product/${id}`}
                    >
                        <IconCircleChevronRight />
                        View more
                    </Link>
                </section>
            </div>
        </article>
    );
};
