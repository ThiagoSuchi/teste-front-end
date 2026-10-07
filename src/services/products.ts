import type { Product, ProductRes } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch('/api-produtos/produtos.json');

    if (!res.ok) {
        throw new Error('Não foi possivel carregar os produtos')
    }

    const data: ProductRes = await res.json();
    return data.products
}