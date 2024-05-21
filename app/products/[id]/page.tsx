"use client";
import { Category } from "@/util/Category";
import { Product } from "@/util/Product";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/product-card/ProductCard";
import { getCategories, getCategoryProducts } from "../../services/category";
interface ProductsProps {}
const Products: FunctionComponent<ProductsProps> = (props) => {
	const router = useRouter();
	const { id } = useParams();
	const [categoryData, setCategoryData] = useState<Product[]>([]);
	const [categoryInfo, setCategoryInfo] = useState<Category>({
		id: -1,
		name: "",
	});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (categoryInfo.id !== -1) {
			getCategoryProducts({
				id: categoryInfo.id,
			})
				.then((res) => {
					setCategoryData(res.data.product);
					setLoading(false);
				})
				.catch((err) => {});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryInfo]);
	useEffect(() => {
		getCategories()
			.then((res) => {
				res.data.category.map((item) => {
					if (item.id === parseInt(id as string)) {
						setCategoryInfo(item);
					}
				});
			})
			.catch((err) => {
				toast(err.response.message, {
					type: "error",
				});
			});
	}, [id]);

	return (
		<div className="w-full h-full flex flex-col justify-start items-center p-16 pt-2">
			<Header />
			<div className="h-[100px] w-full flex flex-row justify-start items-center mt-16">
				<Button
					variant="light"
					startContent={<MdOutlineKeyboardArrowLeft size={35} />}
					className="text-2xl font-semibold cursor-pointer"
					onClick={() => {
						router.back();
					}}
				>
					{categoryInfo.name}
				</Button>
			</div>
			<div className="w-full flex-wrap flex flex-row justify-start items-start ">
				{loading ? (
					<Loading />
				) : (
					categoryData.map((product) => (
						<ProductCard
							key={product.name}
							variant="portrait"
							data={{
								name: product.name,
								image: product.cover,
								info: product.author,
								price: product.price,
							}}
							onClick={() => {
								router.push(`detail/${product.id}`);
							}}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Products;
