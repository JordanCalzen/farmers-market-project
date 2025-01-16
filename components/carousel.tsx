"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Slide {
	image: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

export default function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides: Slide[] = [
		{
			image: "/4832157.png",
			title: "Discover Innovation",
			description: "Explore the latest in tech and innovation.",
			buttonText: "Learn More",
			buttonLink: "/learn-more",
		},
		{
			image: "/15256428.png",
			title: "Boost Productivity",
			description: "Tools to help you work smarter, not harder.",
			buttonText: "Get Started",
			buttonLink: "/get-started",
		},
		{
			image: "/harvest_11296748.png",
			title: "Harvest Growth",
			description: "Achieve your goals with our proven solutions.",
			buttonText: "Explore",
			buttonLink: "/explore",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 3000); // Change slide every 3 seconds
		return () => clearInterval(interval); // Cleanup interval on unmount
	}, [slides.length]);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	return (
		<div className="relative w-full h-screen bg-slate-200">
			{/* Image Section */}
			<div className="relative h-64 overflow-hidden rounded-lg md:h-96">
				{slides.map((slide, index) => (
					<Image
						key={index}
						src={slide.image}
						fill
						priority
						className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
							index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
						alt={slide.title}
					/>
				))}
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/30"></div>
			</div>

			{/* Text and Button Section */}
			<div className="absolute text-black bottom-60 left-1/2 transform -translate-x-1/2 text-center">
				<h2 className="text-2xl  font-bold md:text-4xl">
					{slides[currentIndex].title}
				</h2>
				<p className="mt-2 text-sm md:text-lg">
					{slides[currentIndex].description}
				</p>
				<Link
					href="/Home"
					className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
				>
					{slides[currentIndex].buttonText}
				</Link>
			</div>

			{/* Navigation Dots */}
			<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
				{slides.map((_, index) => (
					<button
						key={index}
						type="button"
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-blue-500" : "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index)}
					></button>
				))}
			</div>

			{/* Previous Button */}
			<button
				type="button"
				className="absolute top-[-25%] left-[-5%] z-30 flex items-center justify-center h-full px-4 cursor-pointer"
				onClick={handlePrev}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
					<svg
						className="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>

			{/* Next Button */}
			<button
				type="button"
				className="absolute top-[-25%]  right-[-5%] z-30 flex items-center justify-center h-full px-4 cursor-pointer"
				onClick={handleNext}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
					<svg
						className="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
}
