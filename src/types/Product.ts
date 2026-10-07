export interface Product {
    productName: string
    descriptionShort: string
    photo: string
    price: number
}

export interface ProductRes {
    success: boolean
    products: Product[]
}