import productApi from "@/Actions/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const productsArray = (await productApi()) || [];
	const product = productsArray.find((product) => product.id == id);
	return (
		<div className="text-black">
			<nav className="w-full py-1 shadow-custom-dark px-2 flex items-center justify-between">
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
			<div className="text-black p-2">
				<div className="relative mb-2 bg-white shadow-custom-dark rounded-full flex  items-center">
					<input
						type="text"
						placeholder="Search..."
						className="w-full px-4 py-2 pl-10 text-black border-none rounded-full outline-none"
					/>
					<span className="absolute left-3 text-gray-400">
						<IoSearch />
					</span>
				</div>
				{product ? (
					<div className=" max-w-sm bg-white  ">
						<a href="#">
							<div className=" h-[10rem] shadow-custom-dark">
								<Image
									className="rounded-t-lg w-full h-full object-cover"
									src={product.images[1]}
									alt={product.title}
									width={300}
									height={300}
								/>
							</div>
						</a>
						<div className="px-2 pb-5">
							<a href="#">
								<h5 className=" font-semibold tracking-tight text-black">
									{product.title}
								</h5>
							</a>
							<div className="flex items-center mt-2.5 mb-5">
								<div className="flex items-center space-x-1 rtl:space-x-reverse">
									<svg
										className="w-4 h-4 text-yellow-300"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 22 20"
									>
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
									</svg>
									<svg
										className="w-4 h-4 text-yellow-300"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 22 20"
									>
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
									</svg>
									<svg
										className="w-4 h-4 text-yellow-300"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 22 20"
									>
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
									</svg>
									<svg
										className="w-4 h-4 text-yellow-300"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 22 20"
									>
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
									</svg>
									<svg
										className="w-4 h-4 text-gray-200 dark:text-gray-600"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 22 20"
									>
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
									</svg>
								</div>
								<span className="bg-blue-100 text-black text-xs font-semibold px-2.5 py-0.5 rounded ">
									4.8
								</span>
							</div>
							<div className="flex items-center justify-between">
								<span className=" font-bold text-black">${product.price}</span>
							</div>
							<p>{product.description}</p>
							<div className="flex items-center justify-center pt-2">
								<a
									href="#"
									className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-3 py-2 text-center "
								>
									Add to cart
								</a>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}
