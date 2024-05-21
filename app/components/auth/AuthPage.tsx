"use client";
import Login from "@/app/components/login/Login";
import Register from "@/app/components/register/Register";
import { loginRequest, registerRequest } from "@/app/services/auth";
import background from "@/public/assets/bookStoreImage.jpg";
import logo from "@/public/assets/logo.png";
import { logIn } from "@/redux/feature/auth-slice";
import { useAppSelector, useFanthalDispatch } from "@/redux/store";
import { AuthForm, AuthState } from "@/util/Auth";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import Loading from "../Loading/Loading";
enum ScreenType {
	LOGIN,
	REGISTER,
}
interface AuthPageProps {}
const AuthPage: FunctionComponent<AuthPageProps> = () => {
	const router = useRouter();
	const dispatch = useFanthalDispatch();
	const authInfo = useAppSelector((store) => store.authReducer);
	const [screenType, setScreenType] = useState<ScreenType>(ScreenType.LOGIN);
	const [errors, setErrors] = useState<AuthForm | undefined>(undefined);

	const [formValues, setFormValues] = useState<AuthForm>({
		email: "",
		password: "",
	});
	useEffect(() => {
		if (authInfo.token !== "") {
			router.push("/category");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authInfo]);
	const handleFormValueChange = (values: AuthForm) => {
		setFormValues({ ...values });
	};
	useEffect(() => {
		const userSchema = yup.object({
			...(ScreenType.REGISTER === screenType
				? { name: yup.string().required("Must enter a name") }
				: {}),
			email: yup
				.string()
				.email("Please enter valid email.")
				.required("Must enter an email"),
			password: yup
				.string()
				.min(6, "Password must be at least 6 characters long")
				.max(20, "Password must be at most 20 characters long")
				.matches(
					/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
					"Password must contain at least one letter and one number"
				)
				.required("Password is required"),
		});
		userSchema
			.validate(formValues, { abortEarly: false })
			.then((res) => {
				setErrors(undefined);
			})
			.catch((err) => {
				const _errors = err.inner.reduce((acc: any, error: any) => {
					acc[error.path] = error.message;
					return acc;
				}, {});
				setErrors(_errors);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formValues]);

	const handleLogin = (auth: AuthState) => {
		dispatch(logIn(auth));
		router.push("/category");
	};

	if (authInfo.token !== "") {
		return <Loading />;
	}
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
							<Login onChange={handleFormValueChange} errors={errors} />
						)}
						{ScreenType.REGISTER === screenType && (
							<Register
								onChange={handleFormValueChange}
								errors={errors}
							/>
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
										loginRequest({
											email: formValues.email,
											password: formValues.password,
										})
											.then((res) => {
												if (res.data.action_login.token !== "") {
													const auth = {
														name: formValues.email,
														email: formValues.email,
														type: "Bearer",
														token: res.data.action_login.token,
													};
													if (formValues.rememberMe) {
														localStorage.setItem(
															"authInfo",
															JSON.stringify(auth)
														);
													}
													handleLogin(auth);
												}
											})
											.catch((err) => {
												toast(err.response.message, {
													type: "error",
												});
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
										registerRequest({
											email: formValues.email,
											password: formValues.password,
											name: formValues.name!,
										})
											.then((res) => {
												if (res.data.action_register.token !== "") {
													const auth = {
														name: formValues.email,
														email: formValues.email,
														type: "Bearer",
														token: res.data.action_register.token,
													};
													handleLogin(auth);
												}
											})
											.catch((err) => {
												toast(err.response.message, {
													type: "error",
												});
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
