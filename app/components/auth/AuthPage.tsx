"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import background from "./../../../public/assets/bookStoreImage.jpg";
import logo from "./../../../public/assets/logo.png";
import Login from "./../login/Login";
import Register from "./../register/Register";
enum ScreenType {
	LOGIN,
	REGISTER,
}
interface AuthPageProps {}
const AuthPage: FunctionComponent<AuthPageProps> = () => {
	const [screenType, setScreenType] = useState<ScreenType>(ScreenType.LOGIN);
	return (
		<main className="w-full h-full flex flex-row items-start justify-start">
			<div className="w-[50%] h-full">
				<Image
					className="w-full h-full"
					src={background}
					title="bookStore"
					alt="bookstore"
				/>
			</div>
			<div className="w-[50%] h-full flex flex-col justify-start items-center p-14">
				<div className="w-full">
					<div className="flex flex-row justify-center items-center m-16">
						<div className="flex flex-col justify-start items-start w-[85%]">
							<div className="w-[65%] flex flex-center justify-center items-center">
								<Image
									className="w-[125px]"
									src={logo}
									title="logo"
									alt="logo"
								></Image>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full h-[60px] mb-10">
					<div className="flex flex-row justify-center items-center m-16 mt-0">
						<div className="flex flex-col justify-center items-start w-[85%]">
							<div className="m-1 w-[75%] text-medium">
								Welcome Back!
							</div>
							<div className="m-1 w-[75%] text-2xl font-bold">
								Login to your account
							</div>
						</div>
					</div>
				</div>
				<div className="h-[50%] w-full">
					{ScreenType.LOGIN === screenType && (
						<Login onChange={(values) => {}} />
					)}
					{ScreenType.REGISTER === screenType && (
						<Register onChange={(values) => {}} />
					)}
					<div className="flex flex-row justify-center items-center m-16">
						<div
							className={`flex  ${
								screenType === ScreenType.LOGIN
									? "flex-col"
									: "flex-col-reverse"
							} justify-center items-start w-[85%]`}
						>
							<Button
								radius="none"
								size="md"
								{...(screenType === ScreenType.LOGIN
									? { className: "m-1 w-[75%] bg-orange-800" }
									: {
											variant: "bordered",
											className: "m-1 w-[75%]",
									  })}
								onClick={() => {
									setScreenType(ScreenType.LOGIN);
								}}
							>
								Login
							</Button>
							<Button
								radius="none"
								size="md"
								{...(screenType === ScreenType.REGISTER
									? { className: "m-1 w-[75%] bg-orange-800" }
									: {
											variant: "bordered",
											className: "m-1 w-[75%]",
									  })}
								onClick={() => {
									setScreenType(ScreenType.REGISTER);
								}}
							>
								Register
							</Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AuthPage;
