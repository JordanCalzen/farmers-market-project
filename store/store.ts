"use client";
import { ProductProps } from "@/types/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// interface ICartItems extends ProductProps{
// 	quantity:number;
// };

interface CardItems {
	id: string;
	title: string;
	slug: string;
	image: string;
	description: string;
	rating: string;
	price: number;
	quantity: number;
}

type cartStore = {
	items: CardItems[];
	handleAddToCart: (product: ProductProps) => void;
	handleRemove: (id: string) => void;
	updateQty: (type: "increment" | "decrement", id: string) => void;
};

export const useCartStore = create<cartStore>()(
	persist(
		(set, get) => ({
			items: [],
			handleAddToCart: (product) => {
				const items = get().items;
				const existingProduct = items.find((item) => item.id === product.id);

				if (existingProduct) {
					toast.error("Product already exists.");
				} else {
					set({
						items: [
							...get().items,
							{
								id: product.id,
								title: product.title,
								slug: product.slug,
								image: product.images[0],
								description: product.description,
								rating: product.rating[0],
								price: product.price,
								quantity: 1,
							},
						],
					});
					toast.success("Product added to cart.");
				}
			},
			handleRemove: (id) => {
				const items = get().items;
				const filteredItems = items.filter((item) => id !== item.id);
				set({ items: filteredItems });
				toast.success("Item removed successfully");
			},
			updateQty: (type, id) => {
				const item = get().items.find((item) => id === item.id);

				if (!item) {
					return;
				}
				// item.quantity =
				// 	type === "increment" ? item.quantity + 1 : item.quantity - 1;

				if (type === "increment") {
					item.quantity += 1;
				} else if (type === "decrement" && item.quantity > 1) {
					item.quantity -= 1;
				}

				set({
					items: [...get().items],
				});
			},
		}),
		{
			name: "local-storage",
		}
	)
);
