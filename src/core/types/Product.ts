export interface Product {
    image: string;
    title: string;
    price: string;
    slug?: string;
    type?: string;
    colors?: Array<{ name: string; class: string }>;
    sizes?: Array<{ name: string }>;
}