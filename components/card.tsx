import { ProductProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ product }: { product: ProductProps }) {
	return (
		<div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
			<a href="#">
				<div className=" h-[8rem]">
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
					<Link
						href={`/products/${product.id}`}
						className="text-blue-700 text-sm underline text-center"
					>
						View Details
					</Link>
				</div>
				<div className="flex items-center justify-start pt-2">
					<a
						href="#"
						className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-3 py-2 text-center "
					>
						Add to cart
					</a>
				</div>
			</div>
		</div>
	);
}
