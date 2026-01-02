import { Footer, Header, Loader } from "@components/index.ts";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";

const HomePage = lazy(() => import("@pages/Home.tsx"));
const SearchPage = lazy(() => import("@pages/Search.tsx"));
const ProductDetailsPage = lazy(() => import("@pages/ProductDetails.tsx"));
const CartPage = lazy(() => import("@pages/Cart.tsx"));
const NotFoundPage = lazy(() => import("@pages/NotFound.tsx"));

const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/product/:id" component={ProductDetailsPage} />
                    <Route path="/cart" component={CartPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Suspense>
            <Footer />
        </>
    );
};

export default App;
