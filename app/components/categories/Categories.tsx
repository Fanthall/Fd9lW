"use client";
import { getCategories } from "@/app/services/category";
import { useAppSelector } from "@/redux/store";
import { Category } from "@/util/Category";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import RowCategory from "./RowCategory";

interface CategoriesProps {}
const Categories: FunctionComponent<CategoriesProps> = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const authInfo = useAppSelector((store) => store.authReducer);
	useEffect(() => {
		getCategories()
			.then((res) => {
				setCategories(res.data.category);
			})
			.catch((err) => {
				toast(err.response.message, {
					type: "error",
				});
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="w-full h-fit flex flex-col justify-center items-center">
			{categories.map((item) => {
				return (
					<RowCategory
						key={`${item.name}-${item.id}`}
						categoryInfo={item}
					/>
				);
			})}
		</div>
	);
};

export default Categories;
