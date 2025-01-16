import Image from "next/image";
import React from "react";

export default function Cardc() {
	return (
		<div className="flex flex-col items-center p-4  hover:shadow-md">
			<div className="w-20 h-20 p-2 mb-2 border  border-green-500 rounded-lg ">
				<Image
					src="/4832157.png"
					alt=""
					width={200}
					height={200}
					className=""
				/>
			</div>
			<p className="text-sm text-center">Vegetables</p>
		</div>
	);
}
