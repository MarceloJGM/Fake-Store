import { IconBuildingStore } from "@tabler/icons-react";
import { Link } from "wouter";
import { ShoppingCart } from "./ShoppingCart";

export const Header = () => {
    const navLinkStyles = "hover:opacity-85 transition-opacity";
    return (
        <header className="flex flex-wrap justify-evenly items-center gap-x-8 p-2 bg-bg-primary text-text-primary sticky top-0 z-10 border-b border-white/20">
            <section className="text-h2-responsive">
                <Link className="flex items-center gap-1" href="/">
                    <IconBuildingStore />
                    <h2>Fake Store</h2>
                </Link>
            </section>
            <nav className="flex items-center gap-2">
                <Link
                    className={(active) =>
                        active ? navLinkStyles.concat(" text-primary-light") : navLinkStyles
                    }
                    href="/search"
                >
                    Products
                </Link>
                <ShoppingCart />
            </nav>
        </header>
    );
};
