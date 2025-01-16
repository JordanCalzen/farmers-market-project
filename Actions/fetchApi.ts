"use server";
import { CategoryProps } from "@/types/types";

const API = "https://market-hazel.vercel.app/api/categories";
export default async function fetchApi() {
	try {
		const response = await fetch(API);
		const results = await response.json();
		return results.data as CategoryProps[];
	} catch (error) {
		return [];
	}
}
