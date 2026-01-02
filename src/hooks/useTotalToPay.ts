import type { CartProduct, Product } from "@/interfaces/index.ts";

export const useTotalToPay = (
    productsQuantity: CartProduct[],
    productsPrice: Product[],
) => {
    const totalQuantity = productsQuantity.map((product) => product.quantity);
    const allPrices = productsPrice.map((product) => product.price);

    return allPrices
        .map((price, index) => price * totalQuantity[index])
        .reduce((acumulator, currentValue) => acumulator + currentValue, 0);
};
