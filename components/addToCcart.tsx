"use client";
import { useCartStore } from "@/store/store";
import { ProductProps } from "@/types/types";
import React from "react";

export default function AddToCart({ product }: { product: ProductProps }) {
	const { handleAddToCart } = useCartStore((state) => state);
	return (
		<div className="flex items-center justify-end">
			<button
				onClick={() => handleAddToCart(product)}
				className="text-white bg-green-800 hover:bg-green-900  font-medium rounded-lg text-sm px-3 py-2 text-end "
			>
				Add to cart
			</button>
		</div>
	);
}
