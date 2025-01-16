import Link from "next/link";
import React from "react";
import Cardc from "./cardc";
import fetchApi from "@/Actions/fetchApi";

export default async function Category() {
	const categoryArray = await fetchApi();
	return (
		<div className="p-3">
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-lg font-semibold text-black">Category</h2>
				<Link href="/categories" className=" hover:underline text-black/80">
					See All
				</Link>
			</div>
			<div className="grid grid-cols-3 text-black gap-2">
				{categoryArray?.map((product) => {
					return <Cardc key={product.id} item={product} />;
				})}
			</div>
		</div>
	);
}
