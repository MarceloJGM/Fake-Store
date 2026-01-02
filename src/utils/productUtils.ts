export const getProductId = (event: React.MouseEvent) => {
    const productId = Number(
        (event.target as HTMLElement).closest("article")?.getAttribute("id"),
    );

    return productId;
};
