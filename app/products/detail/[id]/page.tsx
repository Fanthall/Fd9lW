"use client";
import Loading from "@/app/components/Loading/Loading";
import { getImage, getProduct } from "@/app/services/product";
import { findInLikes, likeProduct, unlikeProduct } from "@/util/like";
import { Product } from "@/util/Product";
import { Button, Image } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import Header from "../../../components/header/Header";
interface DetailProps {}
const Detail: FunctionComponent<DetailProps> = (props) => {
	const router = useRouter();
	const { id } = useParams();
	const [image, setImage] = useState<string>("");
	const [data, setData] = useState<Product | undefined>();
	const [liked, setLiked] = useState<boolean>(false);

	useEffect(() => {
		if (data) {
			getImage({ cover: data.cover })
				.then((res) => {
					setImage(res.data.action_product_image.url);
				})
				.catch((err) => {
					toast(err.response.message, {
						type: "error",
					});
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	useEffect(() => {
		getProduct({ id: id as string })
			.then((res) => {
				setData(res.data.product_by_pk);
				findInLikes(res.data.product_by_pk.id).then((res) => {
					setLiked(res);
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
					Book Details
				</Button>
			</div>
			<div className="w-full flex-wrap flex flex-row justify-start items-start">
				{data ? (
					<>
						<div className="w-full h-[600px] flex flex-row justify-start items-center">
							<div className="h-full w-[600px] flex flex-row justify-center items-center bg-violet-100 mr-16 rounded-md">
								<Image
									src={image}
									title={data.name}
									alt={data.name}
									width={400}
								></Image>
							</div>
							<div className="h-full w-[65%] flex flex-col justify-start items-center pl-4">
								<div className="h-fit w-full mt-10 flex flex-row justify-between items-center">
									<div>
										<div className=" font-semibold text-2xl">
											{data.name}
										</div>
										<div className="text-lg text-gray-500">
											{data.author}
										</div>
									</div>
									<div>
										<Button
											size="sm"
											radius="lg"
											variant="light"
											isIconOnly
											className="bg-secondary-100"
											onClick={() => {
												!liked
													? likeProduct({
															product: data,
													  })
															.then((res) => {
																setLiked(res);
															})
															.catch((err) => {})
													: unlikeProduct({
															productId: data.id,
													  })
															.then((res) => {
																setLiked(!res); //if true  removed
															})
															.catch((err) => {});
											}}
										>
											{liked ? (
												<FaHeart size={20} />
											) : (
												<CiHeart size={25} />
											)}
										</Button>
									</div>
								</div>
								<div className="mt-24">
									<h1 className="font-semibold text-2xl mb-2">
										Summary
									</h1>
									<p>{data.description}</p>
								</div>
							</div>
						</div>
						<div className="w-full h-[100px] flex flex-row-reverse justify-start items-center pr-16">
							<Button
								size="md"
								radius="none"
								className="w-[350px] flex flex-row justify-between items-center bg-orange-500 font-semibold text-white"
							>
								<span>{`${data.price}$`}</span>
								<span>Buy Now</span>
							</Button>
						</div>
					</>
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
};

export default Detail;
