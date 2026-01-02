import axios from "axios";
import type { CartProduct } from "@/interfaces/index.ts";

const FAKESTORE_BASE_URL = "https://fakestoreapi.com/products/";

const fakeStoreApiClient = axios.create({
    baseURL: FAKESTORE_BASE_URL,
    timeout: 10000,
});

export const fetchAllProducts = async () => {
    try {
        const response = await fakeStoreApiClient.get("");
        const { data } = response;

        return data;
    } catch (error) {
        console.error("Error:", error);
    }
};

export const fetchSelectedProduct = async (id: string) => {
    if (id) {
        try {
            const response = await fakeStoreApiClient.get(id);
            const { data } = response;

            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    }
};

export const fetchCartProducts = async (cartProducts: CartProduct[]) => {
    const productsData = await Promise.all(
        cartProducts.map(async (product) => {
            try {
                const response = await fakeStoreApiClient.get(
                    product.productId.toString(),
                );
                return response.data;
            } catch (error) {
                console.error("Error:", error);
            }
        }),
    );
    return productsData;
};
