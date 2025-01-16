import Link from "next/link";
import React from "react";
import Cardc from "./cardc";

export default function Category() {
	return (
		<div className="p-3">
			<div className="flex justify-between items-center">
				<h2 className="text-lg font-semibold text-black">Category</h2>
				<Link href="/categories" className=" hover:underline text-black/80">
					See All
				</Link>
			</div>
			<div className="grid grid-cols-3 text-black gap-2">
				<Cardc />
				<Cardc />
				<Cardc />
				<Cardc />
			</div>
		</div>
	);
}
