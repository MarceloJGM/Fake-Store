import { IconBox, IconCash, IconCertificate } from "@tabler/icons-react";
import { HomeCard, SearchForm } from "@/components/index.ts";

const Home = () => {
    return (
        <main className="flex flex-col items-center bg-bg-secondary animate-in fade-in-25 duration-500">
            <title>Fake Store: Home</title>
            <section className="w-full h-[50dvh] bg-[url(/hero.webp)] origin-center bg-cover bg-no-repeat">
                <div className="flex flex-col grow gap-2 justify-center items-center w-full h-full bg-bg-tertiary/60 backdrop-blur-xs p-4 text-center text-pretty">
                    <h1 className="text-h1-responsive text-primary-dark">
                        Welcome to Fake Store!
                    </h1>
                    <p className="text-text-primary/90">
                        The place where you'll find the best quality products
                    </p>
                    <SearchForm />
                </div>
            </section>
            <section className="bg-bg-primary w-full p-4">
                <header className="flex flex-col gap-2 text-center border-b-4 border-border pb-3 px-4">
                    <h2 className="text-h2-responsive text-text-primary">
                        Why Fake Store?
                    </h2>
                    <p className="text-text-primary/90 text-pretty text-justify">
                        Lorem quis similique nulla impedit in corrupti Excepturi ipsa
                        aliquam repudiandae quis voluptatem? Commodi atque possimus natus
                        quis eius, eum Repellendus dignissimos repellendus possimus eos
                        obcaecati Esse architecto earum sint
                    </p>
                </header>
                <div className="flex justify-center mx-auto gap-4 p-4 flex-wrap max-w-300">
                    <HomeCard
                        icon={
                            <IconBox
                                size={64}
                                className="text-primary m-2 bg-primary-soft p-2 rounded-full"
                            />
                        }
                        title="Find your favorite products"
                        text="Lorem voluptatum voluptatum dolores tenetur totam Mollitia animi
                                atque eaque quibusdam fugit. Quis distinctio nihil nesciunt
                                numquam iusto reiciendis. Obcaecati facilis obcaecati nam ipsa
                                magnam Cumque consequuntur tenetur vitae at!"
                    />
                    <HomeCard
                        icon={
                            <IconCertificate
                                size={64}
                                className="text-primary m-2 bg-primary-soft p-2 rounded-full"
                            />
                        }
                        title="Quality guaranteed"
                        text="Lorem voluptatum voluptatum dolores tenetur totam Mollitia animi
                                atque eaque quibusdam fugit. Quis distinctio nihil nesciunt
                                numquam iusto reiciendis. Obcaecati facilis obcaecati nam ipsa
                                magnam Cumque consequuntur tenetur vitae at!"
                    />
                    <HomeCard
                        icon={
                            <IconCash
                                size={64}
                                className="text-primary m-2 bg-primary-soft p-2 rounded-full"
                            />
                        }
                        title="Competitive prices"
                        text="Lorem voluptatum voluptatum dolores tenetur totam Mollitia animi
                                atque eaque quibusdam fugit. Quis distinctio nihil nesciunt
                                numquam iusto reiciendis. Obcaecati facilis obcaecati nam ipsa
                                magnam Cumque consequuntur tenetur vitae at!"
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;
