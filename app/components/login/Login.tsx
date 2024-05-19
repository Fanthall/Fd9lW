import { Checkbox, Input } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
interface LoginProps {
	onChange: (values: {
		email: string;
		password: string;
		rememberMe: boolean;
	}) => void;
	errors?: {
		email: string;
	};
}
const Login: FunctionComponent<LoginProps> = (props) => {
	const [values, setValues] = useState<{
		email: string;
		password: string;
		rememberMe: boolean;
	}>({ email: "", password: "", rememberMe: false });

	useEffect(() => {
		props.onChange(values);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

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
					}}
				/>
				<Input
					size="sm"
					name="password"
					label="Password"
					radius="none"
					placeholder="********"
					className="m-1 w-[75%] "
					value={values.password}
					onChange={(e) => {
						setValues({ ...values, password: e.target.value });
					}}
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
