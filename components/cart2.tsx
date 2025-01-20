"use client";
import { useCartStore } from "@/store/store";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar2() {
	const { items } = useCartStore((state) => state);
	const totalItems = items.length;
	return (
		<div>
			<nav className="w-full shadow py-1 px-2 flex items-center justify-between">
				<Link href="/Home" className="p-2 rounded-full shadow-sm text-black/50">
					<FaChevronLeft />
				</Link>
				<div className="text-black flex items-center justify-center gap-2">
					<Link
						href="#"
						className="py-2 px-3 text-white rounded-md bg-green-500"
					>
						Sell Now
					</Link>
					<Link href="#" className="p-2 rounded-full shadow-sm">
						<IoMdHeartEmpty />
					</Link>
					<Link href="/cart" className="p-2  relative rounded-full shadow-sm">
						<IoCartOutline />
						<span className="absolute w-[15px] text-center flex items-center justify-center h-[15px] bg-green-800 rounded-full text-white top-0 left-[15px] p-2 text-sm">
							{totalItems}
						</span>
					</Link>
				</div>
			</nav>
		</div>
	);
}
