"use client";
import discount from "@/public/assets/advertisements/discount.png";
import discount2 from "@/public/assets/advertisements/discount2.png";
import shell from "@/public/assets/advertisements/shell.png";
import welcome from "@/public/assets/advertisements/welcome.png";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

interface ImageSliderProps {
	imageHeightPx: number;
}
const ImageSlider: FunctionComponent<ImageSliderProps> = (props) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(1);
	const images = [welcome, discount2, discount, shell];
	return (
		<div className="flex flex-col justify-start items-center w-full h-full pl-24 pr-24 pt-8">
			{images.map((item, index) => {
				if (index === selectedIndex) {
					return (
						<Image
							key={`slide-image-${index}`}
							className={`h-[${
								props.imageHeightPx ?? 400
							}px] w-full rounded-lg `}
							src={item}
							alt={"discount"}
						></Image>
					);
				}
			})}

			<div className="flex flex-row justify-center item mt-4">
				{new Array(images.length).fill("").map((item, index) => {
					if (index === selectedIndex) {
						return (
							<FaRegCircleDot
								onClick={() => {
									setSelectedIndex(index);
								}}
								style={{ cursor: "pointer" }}
								key={`slider-dot-${index}`}
								className="mr-1"
							/>
						);
					} else {
						return (
							<GoDotFill
								onClick={() => {
									setSelectedIndex(index);
								}}
								style={{ cursor: "pointer" }}
								key={`slider-dot-${index}`}
								className="mr-1"
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default ImageSlider;
