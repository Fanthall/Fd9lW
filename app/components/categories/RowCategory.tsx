"use client";

import { getCategoryProducts } from "@/app/services/category";
import { Category } from "@/util/Category";
import { Product } from "@/util/Product";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
interface RowCategoryProps {
	categoryInfo: Category;
}
const RowCategory: FunctionComponent<RowCategoryProps> = (props) => {
	const router = useRouter();
	const [categoryData, setCategoryData] = useState<Product[]>([]);
	useEffect(() => {
		getCategoryProducts({
			id: props.categoryInfo.id,
		})
			.then((res) => {
				setCategoryData(res.data.product);
			})
			.catch((err) => {});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleRouteCategoryList = () => {
		router.push(`products/${props.categoryInfo.id}`);
	};

	return (
		<div className="w-full min-h-[300px] mb-5 flex flex-col justify-start items-center p-2">
			<div className="w-full flex flex-row justify-between items-center p-4">
				<div
					className="text-2xl font-semibold cursor-pointer"
					onClick={() => {
						handleRouteCategoryList();
					}}
				>
					{props.categoryInfo.name}
				</div>
				<div
					className="text-orange-400 font-semibold cursor-pointer"
					onClick={() => {
						handleRouteCategoryList();
					}}
				>
					View All
				</div>
			</div>
			<div className="w-full  flex flex-row justify-start items-center flex-wrap ">
				{categoryData.slice(0, 4).map((item) => {
					return (
						<ProductCard
							key={`${item.name}-${item.id}`}
							variant="landscape"
							data={{
								name: item.name,
								image: item.cover,
								info: item.author,
								price: item.price,
							}}
							onClick={() => {
								router.push(`products/detail/${item.id}`);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RowCategory;
