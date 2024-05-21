"use client";
import { getLikes, Likes } from "@/util/like";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/header/Header";
import ProductCard from "../components/product-card/ProductCard";

interface LikesProps {}
const LikeList: FunctionComponent<LikesProps> = (props) => {
	const router = useRouter();
	const [likes, setLikes] = useState<Likes[]>([]);
	useEffect(() => {
		getLikes()
			.then((res) => {
				setLikes(res);
			})
			.catch((err) => {
				toast(err.response.message, {
					type: "error",
				});
			});
	}, []);
	return (
		<div className="w-full h-full flex flex-col justify-start items-center p-16 pt-2">
			<Header />
			<div className="w-full flex flex-row justify-between items-center p-4">
				<div
					className="text-2xl font-semibold"
					onClick={() => {
						router.back();
					}}
				>
					Liked Products
				</div>
			</div>
			<div className="w-full flex-wrap flex flex-row justify-start items-start">
				<div className="w-full  flex flex-row justify-start items-center flex-wrap ">
					{likes.map((like) => {
						return (
							<ProductCard
								key={`${like.productId}-${like.productName}`}
								data={{
									name: like.productName,
									info: like.author,
									price: like.price,
									image: like.cover,
								}}
								onClick={() => {
									router.push(`products/detail/${like.productId}`);
								}}
								variant="landscape"
							></ProductCard>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default LikeList;
