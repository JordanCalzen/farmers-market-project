import { CategoryProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function Cardc({ item }: { item: CategoryProps }) {
	return (
		<div className="flex flex-col items-center  hover:shadow-md">
			<div className="w-20 h-20 p-2 mb-2 border  border-green-500 rounded-lg ">
				<Image
					src={item.image}
					alt={item.title}
					width={200}
					height={200}
					className="object-cover w-full h-full"
				/>
			</div>
			<p className="text-sm text-center">{item.title}</p>
		</div>
	);
}
