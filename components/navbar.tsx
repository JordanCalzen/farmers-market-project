"use client";
import { useCartStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

export default function Navbar() {
	const { items } = useCartStore((state) => state);
	const totalItems = items.length;
	return (
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
				<Link href="/cart" className="p-2 relative rounded-full shadow-sm">
					<IoCartOutline />
					<span className="absolute w-[15px] text-center flex items-center justify-center h-[15px] bg-green-800 rounded-full text-white top-0 left-[15px] p-2 text-sm">
						{totalItems}
					</span>
				</Link>
			</div>
		</nav>
	);
}
