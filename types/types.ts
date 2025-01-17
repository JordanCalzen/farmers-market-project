export type CategoryProps = {
	id: string;
	title: string;
	slug: string;
	image: string;
	description: string;
	createdAt: string;
	updatedAt: string;
};

export type ProductProps = {
	id: string;
	title: string;
	slug: string;
	description: string;
	rating: string[];
	price: number;
	quantity: number;
	images: string[];
	createdAt: string;
	updatedAt: string;
	categoryId: string;
};
