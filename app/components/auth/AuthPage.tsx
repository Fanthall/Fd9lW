"use client";
import Login from "@/app/components/login/Login";
import Register from "@/app/components/register/Register";
import { login, register } from "@/app/services/auth";
import background from "@/public/assets/bookStoreImage.jpg";
import logo from "@/public/assets/logo.png";
import { AuthForm } from "@/util/Auth";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
enum ScreenType {
	LOGIN,
	REGISTER,
}
interface AuthPageProps {}
const AuthPage: FunctionComponent<AuthPageProps> = () => {
	const [screenType, setScreenType] = useState<ScreenType>(ScreenType.LOGIN);
	const [formValues, setFormValues] = useState<AuthForm>({
		email: "",
		password: "",
	});

	const handleFormValueChange = (values: AuthForm) => {
		console.log(values);
		setFormValues({ ...values });
	};

	return (
		<>
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
							<div className="m-1 w-[75%] text-medium text-gray-500">
								Welcome Back!
							</div>
							<div className="m-1 w-[75%] text-2xl font-bold">
								Login to your account
							</div>
						</div>
					</div>
				</div>
				<div className="h-[400px] w-full">
					<div className="h-[200px] w-full">
						{ScreenType.LOGIN === screenType && (
							<Login onChange={handleFormValueChange} />
						)}
						{ScreenType.REGISTER === screenType && (
							<Register onChange={handleFormValueChange} />
						)}
					</div>
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
									? {
											className: "m-1 w-[75%] bg-orange-600",
											style: {
												color: "rgb(255, 255, 255)",
											},
									  }
									: {
											variant: "bordered",
											className: "m-1 w-[75%]",
											style: {
												color: "rgb(97, 81, 219)",
												borderColor: "rgb(97, 81, 219)",
											},
									  })}
								onClick={() => {
									if (ScreenType.LOGIN !== screenType) {
										setScreenType(ScreenType.LOGIN);
									} else {
										login({
											email: formValues.email,
											password: formValues.password,
										})
											.then((res) => {
												console.log(res);
											})
											.catch((err) => {
												console.log(err.response);
											});
									}
								}}
							>
								Login
							</Button>
							<Button
								radius="none"
								size="md"
								{...(screenType === ScreenType.REGISTER
									? {
											className: "m-1 w-[75%] bg-orange-600",
											style: {
												color: "rgb(255, 255, 255)",
											},
									  }
									: {
											variant: "bordered",
											className: "m-1 w-[75%]",
											style: {
												color: "rgb(97, 81, 219)",
												borderColor: "rgb(97, 81, 219)",
											},
									  })}
								onClick={() => {
									if (ScreenType.REGISTER !== screenType) {
										setScreenType(ScreenType.REGISTER);
									} else {
										register({
											email: formValues.email,
											password: formValues.password,
											name: formValues.name!,
										})
											.then((res) => {
												console.log(res);
											})
											.catch((err) => {
												console.log(err.response);
											});
									}
								}}
							>
								Register
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthPage;
