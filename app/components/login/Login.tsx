import { Checkbox, Input } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
interface LoginProps {
	onChange: (values: {
		email: string;
		password: string;
		rememberMe: boolean;
	}) => void;
	errors?: {
		email?: string;
		password?: string;
	};
}
const Login: FunctionComponent<LoginProps> = (props) => {
	const [values, setValues] = useState<{
		email: string;
		password: string;
		rememberMe: boolean;
	}>({ email: "", password: "", rememberMe: false });
	const [touched, setTouched] = useState<{
		email: boolean;
		password: boolean;
	}>({ email: false, password: false });
	const [errors, setErrors] = useState<
		| {
				email?: string;
				password?: string;
		  }
		| undefined
	>();
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	useEffect(() => {
		props.onChange(values);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);
	useEffect(() => {
		setErrors(props.errors);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.errors]);
	return (
		<div className="flex flex-row justify-center items-center m-16">
			<div className="flex flex-col justify-center items-start w-[85%]">
				<Input
					size="sm"
					name="email"
					label="Email"
					radius="none"
					placeholder="John@mail.com"
					className="m-1 w-[75%]"
					value={values.email}
					onChange={(e) => {
						setValues({ ...values, email: e.target.value });
						setTouched({ ...touched, email: true });
					}}
					isInvalid={errors?.email != undefined && touched.email}
					errorMessage={props.errors?.email}
				/>
				<Input
					size="sm"
					name="password"
					label="Password"
					radius="none"
					type={isVisible ? "text" : "password"}
					placeholder="********"
					className="m-1 w-[75%]"
					value={values.password}
					endContent={
						<button
							className="focus:outline-none"
							type="button"
							onClick={toggleVisibility}
						>
							{isVisible ? (
								<FaEye className="text-2xl text-default-400 pointer-events-none" />
							) : (
								<FaEyeLowVision className="text-2xl text-default-400 pointer-events-none" />
							)}
						</button>
					}
					onChange={(e) => {
						setValues({ ...values, password: e.target.value });
						setTouched({ ...touched, password: true });
					}}
					isInvalid={errors?.password != undefined && touched.password}
					errorMessage={props.errors?.password}
				/>
				<Checkbox
					size="md"
					name="remember-me"
					className="m-1 w-full"
					checked={values.rememberMe}
					onValueChange={(value) => {
						setValues({ ...values, rememberMe: value });
					}}
				>
					Remember Me
				</Checkbox>
			</div>
		</div>
	);
};

export default Login;
