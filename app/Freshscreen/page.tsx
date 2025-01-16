import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function page() {
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
					<Link href="#" className="p-2 rounded-full shadow-sm">
						<IoCartOutline />
					</Link>
				</div>
			</nav>
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
						className="inline-block px-3 py-1 border bg-green-500 text-white rounded-lg"
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
