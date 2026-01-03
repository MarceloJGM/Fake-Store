import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "wouter";
import { useCartStore } from "@/store/index.ts";

export const ShoppingCart = () => {
    const navLinkStyles = "flex relative p-2 transition-all";
    const cartProducts = useCartStore((state) => state.products);

    return (
        <Link
            href="/cart"
            className={(active) =>
                active ? navLinkStyles.concat(" text-primary-light") : navLinkStyles
            }
        >
            <IconShoppingCart className="hover:opacity-85" size={32} />
            <p className="absolute top-0 right-0 text-[14px] text-primary-dark bg-inherit rounded-full">
                {cartProducts.length}
            </p>
        </Link>
    );
};
