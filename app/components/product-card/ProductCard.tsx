"use client";
import { getImage } from "@/app/services/product";
import { Image } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

interface ProductCardProps {
	data: {
		name: string;
		info: string;
		price: number;
		image: string;
	};
	onClick: () => void;
	variant: "landscape" | "portrait";
}
const ProductCard: FunctionComponent<ProductCardProps> = (props) => {
	const [image, setImage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		getImage({ cover: props.data.image })
			.then((res) => {
				setImage(res.data.action_product_image.url);
				setLoading(false);
			})
			.catch((err) => {
				toast(err.response.message, {
					type: "error",
				});
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.data]);
	if (loading) {
		return <Loading />;
	}
	return (
		<div
			className={`w-[24%] flex-shrink min-w-[420px] flex ${
				props.variant === "landscape"
					? "h-full flex-row"
					: "h-[500px] flex-col"
			} justify-start items-start bg-violet-100 p-2 m-2 rounded-md cursor-pointer`}
			onClick={props.onClick}
		>
			{props.variant === "landscape" ? (
				<div className="w-[40%] h-[220px]">
					<Image
						className="h-[220px] w-[160px]"
						alt={props.data.name}
						src={image}
					></Image>
				</div>
			) : (
				<div className="w-[100%] h-[350px] flex flex-row justify-center items-center">
					<Image
						className="h-[350px] w-[230px]"
						alt={props.data.name}
						src={image}
					></Image>
				</div>
			)}
			<div
				className={`flex ${
					props.variant === "landscape"
						? " w-[60%] h-[220px] flex-col pb-3 pt-3 pl-1"
						: " w-[100%] h-[50px] flex-row mt-3 pl-8 pr-8"
				} justify-between items-start `}
			>
				<div className="h-fit w-full">
					<div className="text-black font-semibold text-2xl">
						{props.data.name}
					</div>
					<div className="text-lg text-gray-500">{props.data.info}</div>
				</div>
				<div
					className="text-2xl font-semibold"
					style={{ color: "rgb(97, 81, 219)" }}
				>
					{`${props.data.price}$`}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
