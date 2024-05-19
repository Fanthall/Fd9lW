"use client";
import _1984 from "@/public/assets/books/1984.jpg";
import dune from "@/public/assets/books/dune.jpg";
import ikigai from "@/public/assets/books/ikigai.jpg";
import metafizik from "@/public/assets/books/metafizik.jpg";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CategoriesProps {}
const Categories: FunctionComponent<CategoriesProps> = () => {
	const row = (rowProps: { data: any[]; name: string; id: number }) => {
		return (
			<div className="w-full h-[250px] mb-5 flex flex-col justify-start items-center p-2">
				<div className="w-full flex flex-row justify-between items-center p-4">
					<div
						className="text-2xl font-semibold cursor-pointer"
						onClick={() => {
							console.log("Category all product");
						}}
					>
						{rowProps.name}
					</div>
					<div
						className="text-orange-400 font-semibold cursor-pointer"
						onClick={() => {
							console.log("Category all product");
						}}
					>
						View All
					</div>
				</div>
				<div className="w-full h-[90%] flex flex-row justify-between items-center">
					{rowProps.data.map((item) => {
						return (
							<div
								key={item.name}
								className="w-[400px] h-full flex flex-row justify-between items-center  bg-violet-100 p-2 rounded-md cursor-pointer"
								onClick={() => {
									console.log("product detail");
								}}
							>
								<div className="w-[40%] h-full">
									<Image
										className="h-[100%] w-[90%]"
										alt={item.name}
										src={item.image}
									></Image>
								</div>
								<div className="w-[60%] h-full flex flex-col justify-between items-between pb-3 pt-3">
									<div>
										<div className="text-black font-semibold text-2xl">
											{item.name}
										</div>
										<div className="text-lg text-gray-500">
											{item.writer}
										</div>
									</div>
									<div
										className="text-2xl font-semibold"
										style={{ color: "rgb(97, 81, 219)" }}
									>
										{item.price}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	};
	const data = [
		{
			data: [
				{
					image: dune,
					name: "Dune",
					writer: "Frank Herbert",
					price: "87,75$",
				},
				{
					image: _1984,
					name: "1984",
					writer: "George Orwell",
					price: "35,75$",
				},
				,
				{
					image: ikigai,
					name: "Ikigai",
					writer: "Hector Garcia",
					price: "36,00$",
				},
				{
					image: metafizik,
					name: "Metafizik",
					writer: "Aristoteles",
					price: "36,00$",
				},
			],
			name: "Best Seller",
			id: 1,
		},
		{
			data: [
				{
					image: dune,
					name: "Dune",
					writer: "Frank Herbert",
					price: "87,75$",
				},
				{
					image: _1984,
					name: "1984",
					writer: "George Orwell",
					price: "35,75$",
				},
				,
				{
					image: ikigai,
					name: "Ikigai",
					writer: "Hector Garcia",
					price: "36,00$",
				},
				{
					image: metafizik,
					name: "Metafizik",
					writer: "Aristoteles",
					price: "36,00$",
				},
			],
			name: "Classics",
			id: 2,
		},
		{
			data: [
				{
					image: dune,
					name: "Dune",
					writer: "Frank Herbert",
					price: "87,75$",
				},
				{
					image: _1984,
					name: "1984",
					writer: "George Orwell",
					price: "35,75$",
				},
				,
				{
					image: ikigai,
					name: "Ikigai",
					writer: "Hector Garcia",
					price: "36,00$",
				},
				{
					image: metafizik,
					name: "Metafizik",
					writer: "Aristoteles",
					price: "36,00$",
				},
			],
			name: "Last Added",
			id: 2,
		},
	];
	return (
		<div className="w-full h-fit flex flex-col justify-center items-center">
			{data.map((item) => {
				return row(item);
			})}
		</div>
	);
};

export default Categories;
