import { useEffect, useRef, useState } from "react";
import type { CartProduct, Filters, Product } from "@/interfaces/index.ts";
import {
    fetchAllProducts,
    fetchCartProducts,
    fetchSelectedProduct,
} from "@/services/index.ts";

export const useProducts = (
    textToFilter?: string | undefined,
    filters?: Filters | undefined,
    id?: string,
    cartProductsList?: CartProduct[],
) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productDetails, setProductDetails] = useState<Product | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const cartProductsRef = useRef<number | undefined>(undefined);

    const [loadingAllProducts, setLoadingAllProducts] = useState(false);
    const [loadingProductDetails, setLoadingProductDetails] = useState(false);
    const [loadingCartProducts, setLoadingCartProducts] = useState(false);

    useEffect(() => {
        const getAllProducts = async () => {
            setLoadingAllProducts(true);
            try {
                const newProducts = await fetchAllProducts();
                setProducts(newProducts);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoadingAllProducts(false);
            }
        };

        getAllProducts();
    }, []);

    useEffect(() => {
        const getFilteredProducts = (
            products: Product[],
            textToFilter: string,
            filters: Filters,
        ) => {
            const newFilteredProducts = products.filter(
                (product) =>
                    product.title.toLowerCase().includes(textToFilter.toLowerCase()) &&
                    (filters.price === 0 || product.price >= filters.price) &&
                    (filters.category === "" || product.category === filters.category),
            );

            setFilteredProducts(newFilteredProducts);
        };

        getFilteredProducts(
            products,
            textToFilter || "",
            filters || { category: "", price: 0 },
        );
    }, [products, textToFilter, filters]);

    useEffect(() => {
        const getProductDetails = async () => {
            if (id) {
                setLoadingProductDetails(true);

                try {
                    const selectedProduct = await fetchSelectedProduct(id);
                    setProductDetails(selectedProduct);
                } catch (error) {
                    console.error("Error:", error);
                } finally {
                    setLoadingProductDetails(false);
                }
            }
        };

        getProductDetails();
    }, [id]);

    useEffect(() => {
        const currentLength = cartProductsList?.length;
        const previousLength = cartProductsRef.current;

        if (
            cartProductsRef.current === undefined ||
            currentLength !== previousLength
        ) {
            const getCartProducts = async () => {
                setLoadingCartProducts(true);
                try {
                    const newCartProducts = await fetchCartProducts(
                        cartProductsList || [],
                    );
                    setCartProducts(newCartProducts);
                } catch (error) {
                    console.error("Error:", error);
                } finally {
                    setLoadingCartProducts(false);
                }
            };

            getCartProducts();
        }

        cartProductsRef.current = currentLength;
    }, [cartProductsList]);

    return {
        products,
        filteredProducts,
        productDetails,
        cartProducts,
        loadingAllProducts,
        loadingProductDetails,
        loadingCartProducts,
    };
};
