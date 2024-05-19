import { Checkbox, Input } from "@nextui-org/react";
import { FunctionComponent } from "react";
interface LoginProps {
	onChange: (values: {
		email: string;
		password: string;
		rememberMe: boolean;
	}) => void;
	errors?: {
		email: string;
		password: string;
	};
}
const Login: FunctionComponent<LoginProps> = (props) => {
	return (
		<div className="flex flex-row justify-center items-center m-16">
			<div className="flex flex-col justify-center items-start w-[85%]">
				<Input
					size="sm"
					name="email"
					label="Email"
					radius="none"
					className="m-1 w-[75%]"
				/>
				<Input
					size="sm"
					name="password"
					label="Password"
					radius="none"
					className="m-1 w-[75%] "
				/>
				<Checkbox size="md" name="remember-me" className="m-1 w-full">
					Remember Me
				</Checkbox>
			</div>
		</div>
	);
};

export default Login;
