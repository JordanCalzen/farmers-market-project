import React from "react";
import Card from "./card";
import Link from "next/link";
import productApi from "@/Actions/productApi";

export default async function Products() {
	const productsArray = await productApi();
	return (
		<div>
			<div className="flex items-center justify-between px-3 text-black/80">
				<h2 className="text-lg font-semibold">Popular</h2>
				<Link href="/Freshscreen">See All</Link>
			</div>
			<div className="grid grid-cols-2 gap-2 p-2">
				{productsArray.map((product) => {
					return <Card key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
