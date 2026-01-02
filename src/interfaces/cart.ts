export interface CartProduct {
    productId: number;
    quantity: number;
}

export interface Cart {
    products: CartProduct[];
    clearCart: () => void;
    addProduct: (product: CartProduct) => void;
    removeProduct: (productId: number) => void;
    sumQuantity: (productId: number) => void;
    lessQuantity: (productId: number) => void;
}
