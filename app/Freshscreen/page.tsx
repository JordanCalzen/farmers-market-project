import Link from "next/link";
import React from "react";

import { IoSearch } from "react-icons/io5";
import Navbar2 from "@/components/cart2";

export default function page() {
	return (
		<div>
			<Navbar2 />
			<div className="relative p-2 flex  items-center">
				<input
					type="text"
					placeholder="Search..."
					className="w-full px-4 py-2 pl-10 bg-gray-100 text-black border-none rounded-full outline-none"
				/>
				<span className="absolute left-3 text-gray-400">
					<IoSearch />
				</span>
			</div>

			<div className="text-sm font-medium text-center text-black p-2">
				<ul className="flex gap-2 flex-nowrap -mb-px overflow-x-auto scrollbar-hide">
					<Link
						href="#"
						className="inline-block px-3 py-1 border bg-green-800 text-white rounded-lg"
					>
						All
					</Link>
					<Link
						href="#"
						className="inline-block px-3 py-1 border border-slate-50 bg-white text-black rounded-lg"
					>
						Mangoes
					</Link>
					<Link
						href="#"
						className="inline-block px-3 py-1 border border-slate-50 bg-white text-black rounded-lg"
					>
						JackFruit
					</Link>
					<Link
						href="#"
						className="inline-block px-3 py-1 border border-slate-50 bg-white text-black rounded-lg"
					>
						Bananas
					</Link>
					<Link
						href="#"
						className="inline-block px-3 py-1 border border-slate-50 bg-white text-black rounded-lg"
					>
						Vegetables
					</Link>
					<Link
						href="#"
						className="inline-block px-3 py-1 border border-slate-50 bg-white text-black rounded-lg"
					>
						Oranges
					</Link>
				</ul>
			</div>
		</div>
	);
}
