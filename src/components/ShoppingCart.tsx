import { IconShoppingCart } from "@tabler/icons-react";
import { Link, useRoute } from "wouter";
import { useCartStore } from "@/store/index.ts";

export const ShoppingCart = () => {
    const [match] = useRoute("/cart");
    const cartProducts = useCartStore((state) => state.products);

    return (
        <Link
            href="/cart"
            className={`flex relative p-2 hover:border-b hover:border-primary-dark transition-all ${match && "border-b border-primary-dark"}`}
        >
            <IconShoppingCart className="" size={32} />
            <p className="absolute top-0 right-0 text-[14px] text-primary-dark bg-inherit rounded-full">
                {cartProducts.length}
            </p>
        </Link>
    );
};
