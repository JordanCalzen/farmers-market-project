import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Products from "@/components/products";
import Category from "@/components/category";
export default async function Home() {
	return (
		<div>
			<nav className="w-full shadow py-2 px-2 flex items-center justify-between">
				<div className="flex items-center justify-between gap-2">
					<a href="#" className="">
						<Image
							className="w-10 h-10 rounded-full object-cover"
							src="/websitepic.jpg"
							alt="jordan"
							width={300}
							height={300}
						/>
					</a>
					<div className="text-black">
						<p>Welcome</p>
						<h1 className="font-bold">Mr. Jordan</h1>
					</div>
				</div>
				<div className="text-black flex items-center justify-center gap-2">
					<Link href="#" className="p-2 rounded-full shadow-sm">
						<FaRegBell />
					</Link>
					<Link href="#" className="p-2 rounded-full shadow-sm">
						<MdOutlineMessage />
					</Link>
					<Link href="#" className="p-2 rounded-full shadow-sm">
						<IoCartOutline />
					</Link>
				</div>
			</nav>
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
