"use client";

import logo from "@/public/assets/logo.png";
import { logOut } from "@/redux/feature/auth-slice";
import { useFanthalDispatch } from "@/redux/store";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
interface HeaderProps {}
const Header: FunctionComponent<HeaderProps> = () => {
	const dispatch = useFanthalDispatch();
	const router = useRouter();
	return (
		<div className="w-full h-[150px] flex flex-row justify-between items-center shadow-sm shadow-foreground/20 p-6">
			<div className="w-[15%] h-full flex flex-row justify-start items-center">
				<Image
					className="w-[75px] cursor-pointer"
					src={logo}
					title="logo"
					alt="logo"
					onClick={() => {
						router.replace("/category");
					}}
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
				<Dropdown size="md" placement="bottom-start" showArrow>
					<DropdownTrigger>
						<Button isIconOnly className="mr-5">
							<FaUser size="22" />
						</Button>
					</DropdownTrigger>
					<DropdownMenu>
						<DropdownItem
							key="logout"
							onClick={() => {
								localStorage.removeItem("authInfo");
								dispatch(logOut());
								router.replace("/");
							}}
						>
							Logout
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Button
					isIconOnly
					className="mr-5"
					onClick={() => {
						router.replace("/likes");
					}}
				>
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
