"use server";
import { ProductProps } from "@/types/types";

const productsApi = "https://market-hazel.vercel.app/api/products";
export default async function productApi() {
	try {
		const response = await fetch(productsApi);
		const results = await response.json();
		return results.data as ProductProps[];
	} catch (error) {
		return [];
	}
}
