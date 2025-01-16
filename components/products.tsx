import React from "react";
import Card from "./card";
import Link from "next/link";

export default function Products() {
	return (
		<div>
			<div className="flex items-center justify-between px-3 text-black/80">
				<h2 className="text-lg font-semibold">Popular</h2>
				<Link href="/Freshscreen">See All</Link>
			</div>
			<div className="grid grid-cols-2 gap-2 p-2">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
