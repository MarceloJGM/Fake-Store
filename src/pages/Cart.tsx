import { IconShoppingBag, IconX } from "@tabler/icons-react";
import { Loader, ProductCard } from "@/components/index.ts";
import { useProducts, useTotalToPay } from "@/hooks/index.ts";
import { useCartStore } from "@/store/index.ts";

const Cart = () => {
    const products = useCartStore((state) => state.products);
    const clearCart = useCartStore((state) => state.clearCart);
    const { cartProducts, loadingCartProducts } = useProducts(
        "",
        undefined,
        "",
        products,
    );

    const totalToPay = useTotalToPay(products, cartProducts);

    return (
        <main className="flex flex-col gap-2 items-center bg-bg-secondary p-4 animate-in fade-in-25 duration-500 w-full grow max-w-300 self-center">
            <title>Fake Store: Shopping Cart</title>
            <section className="flex flex-col self-start border-b-2 border-border w-full">
                <h1 className="text-h1-responsive self-start text-text-primary">
                    My Cart
                </h1>
                {Boolean(totalToPay) && (
                    <span className="self-start text-text-primary">
                        Total to pay: ${totalToPay.toFixed(2)}
                    </span>
                )}
            </section>

            {cartProducts.length > 0 && (
                <button
                    className="flex items-center gap-1 p-2 sticky top-20 rounded-full cursor-pointer truncate bg-error self-end mt-4"
                    type="button"
                    onClick={clearCart}
                >
                    <IconX /> Clear Cart
                </button>
            )}

            <section className="flex flex-col w-full place-items-center gap-4 py-2">
                {loadingCartProducts ? (
                    <Loader />
                ) : cartProducts.length === 0 ? (
                    <h2 className="text-h2-responsive text-text-secondary m-auto">
                        There's nothing here.
                    </h2>
                ) : (
                    cartProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            cartProduct={products.find(
                                (cartProduct) => product.id === cartProduct.productId,
                            )}
                        />
                    ))
                )}
            </section>
            {cartProducts.length > 0 && (
                <button
                    className="flex items-center gap-1 bg-success rounded-full p-2"
                    type="button"
                    onClick={() => alert("Comprao")}
                >
                    <IconShoppingBag />
                    Buy
                </button>
            )}
        </main>
    );
};

export default Cart;
