"use client";
import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCartStore } from "@/store/store";

export default function Cart3() {
	const { items, handleRemove, updateQty } = useCartStore((state) => state);
	const totalExpression = items
		.map((item) => `(${item.price} * ${item.quantity})`)
		.join("+");
	const total = eval(totalExpression);
	return (
		<div>
			<div className="p-2">
				<div className="flex items-center justify-between">
					<h2 className="text-lg py-2 font-semibold">Shopping Cart</h2>
					<h2 className="text-lg py-2 font-semibold">Total:${total ?? 0}</h2>
				</div>
				<div className="bg-[#F2F2F2] p-1 flex items-center justify-between">
					<p>Item Details</p>
					<p>Quantity</p>
					<p>Action</p>
				</div>

				{items.map((item) => {
					const newPrice = item.quantity * item.price;
					return (
						<div key={item.id} className="p-1 shadow-custom-dark mb-2">
							<div className="flex items-center justify-between">
								<div className="text-center">
									<Image
										className="w-[80px] h-[80px] object-cover block"
										src={item.image}
										alt={item.title}
										width={300}
										height={300}
									/>
									<h3>{item.title}</h3>
									<p>${newPrice}</p>
								</div>
								<div className="flex items-center justify-center gap-2">
									<button
										onClick={() => updateQty("decrement", item.id)}
										className="border-none shadow-custom-dark p-1 w-[20px] h-[20px] flex items-center justify-center text-sm font-bold"
									>
										-
									</button>
									<p>{item.quantity}</p>
									<button
										onClick={() => updateQty("increment", item.id)}
										className="border-none shadow-custom-dark p-1 w-[20px] h-[20px] flex items-center justify-center text-sm font-bold"
									>
										+
									</button>
								</div>
								<button
									onClick={() => handleRemove(item.id)}
									className="border-none bg-red-600 shadow-custom-dark py-1 px-3 rounded-lg flex items-center justify-center text-sm font-bold"
								>
									<RiDeleteBin6Line className="text-[20px] text-white" />
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
