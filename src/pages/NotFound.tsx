import { Link } from "wouter";

const NotFound = () => {
    return (
        <main className="m-auto flex flex-col items-center text-center gap-2 text-text-primary animate-in fade-in-25 duration-500">
            <title>Fake Store: 404 - Not Found</title>
            <div className="tracking-widest">
                <h1 className="text-h1-responsive">404</h1>
                <span>Not Found Page</span>
            </div>

            <Link
                href="/"
                className="hover:bg-black hover:text-primary transition-colors text-xl border border-black rounded-full p-2 tracking-widest"
            >
                Go to Home
            </Link>
        </main>
    );
};

export default NotFound;
