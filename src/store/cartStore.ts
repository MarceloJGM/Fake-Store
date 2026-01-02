import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Cart } from "@/interfaces/index.ts";

export const useCartStore = create<Cart>()(
    persist(
        (set, get) => ({
            products: [],

            clearCart: () => set({ products: [] }),

            addProduct: (newProduct) => {
                set({
                    products: get().products.some(
                        (product) => product.productId === newProduct.productId,
                    )
                        ? get().products
                        : [newProduct, ...get().products],
                });
            },

            removeProduct: (productId: number) => {
                set({
                    products: get().products.filter(
                        (product) => product.productId !== productId,
                    ),
                });
            },

            sumQuantity: (newProductId: number) => {
                set({
                    products: get().products.map((product) => {
                        if (product.productId === newProductId) {
                            return {
                                ...product,
                                quantity: product.quantity + 1,
                            };
                        }
                        return product;
                    }),
                });
            },

            lessQuantity: (newProductId: number) => {
                set({
                    products: get().products.map((product) => {
                        if (product.productId === newProductId && product.quantity > 1) {
                            return {
                                ...product,
                                quantity: product.quantity - 1,
                            };
                        }
                        return product;
                    }),
                });
            },
        }),
        {
            name: "cart",
        },
    ),
);
