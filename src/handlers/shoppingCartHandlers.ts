import type { CartProduct } from "@/interfaces/index.ts";
import { getProductId } from "@/utils/index.ts";

export const handleAddProduct = (
    event: React.MouseEvent,
    addProduct: (product: CartProduct) => void,
) => {
    const newProduct = {
        productId: getProductId(event),
        quantity: 1,
    };

    addProduct(newProduct);
};

export const handleRemoveProduct = (
    event: React.MouseEvent,
    removeProduct: (id: number) => void,
) => {
    removeProduct(getProductId(event));
};

export const handleAddQuantity = (
    event: React.MouseEvent,
    sumQuantity: (id: number) => void,
) => {
    sumQuantity(getProductId(event));
};

export const handleLessQuantity = (
    event: React.MouseEvent,
    lessQuantity: (id: number) => void,
) => {
    lessQuantity(getProductId(event));
};
