import React from "react";
import { IoSearch } from "react-icons/io5";
import Products from "@/components/products";
import Category from "@/components/category";
import Navbar from "@/components/navbar";

export default async function Home() {
	return (
		<div>
			<Navbar />
			<div className="relative py-2 flex  items-center">
				<input
					type="text"
					placeholder="Search..."
					className="w-full px-4 py-2 pl-10 bg-gray-100 text-black border-none rounded-full outline-none"
				/>
				<span className="absolute left-3 text-gray-400">
					<IoSearch />
				</span>
			</div>
			<Category />
			<Products />
		</div>
	);
}
