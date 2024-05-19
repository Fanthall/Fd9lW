import { Input } from "@nextui-org/react";
import { FunctionComponent } from "react";
interface RegisterProps {
	onChange: (values: {
		email: string;
		name: string;
		password: string;
	}) => void;
	errors?: {
		name: string;
		email: string;
		password: string;
	};
}
const Register: FunctionComponent<RegisterProps> = (props) => {
	return (
		<div className="flex flex-row justify-center items-center m-16">
			<div className="flex flex-col justify-center items-start w-[85%]">
				<Input
					size="sm"
					name="name"
					label="Name"
					radius="none"
					className="m-1 w-[75%]"
				/>
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
					className="m-1 w-[75%]"
				/>
			</div>
		</div>
	);
};

export default Register;
