"use client";

import logo from "@/public/assets/logo.png";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { FunctionComponent } from "react";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
interface HeaderProps {}
const Header: FunctionComponent<HeaderProps> = () => {
	return (
		<div className="w-full h-[150px] flex flex-row justify-between items-center shadow-sm shadow-foreground/20 p-6">
			<div className="w-[15%] h-full flex flex-row justify-start items-center">
				<Image
					className="w-[75px]"
					src={logo}
					title="logo"
					alt="logo"
				></Image>
			</div>
			<div className="w-[65%] h-full flex flex-row justify-center items-center pl-5 pr-5">
				<Input
					className="w-[85%]"
					startContent={<IoIosSearch />}
					size="md"
					radius="none"
					placeholder="Search"
				></Input>
			</div>
			<div className="w-[20%] h-full flex flex-row justify-start items-center">
				<Button isIconOnly className="mr-5">
					<FaUser size="22" />
				</Button>
				<Button isIconOnly className="mr-5">
					<CiHeart size="22" />
				</Button>
				<Button isIconOnly className="mr-5">
					<SlBasket size="22" />
				</Button>
			</div>
		</div>
	);
};

export default Header;
