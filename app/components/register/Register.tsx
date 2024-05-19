import { Input } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
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
	const [values, setValues] = useState<{
		name: string;
		email: string;
		password: string;
	}>({ name: "", email: "", password: "" });

	useEffect(() => {
		props.onChange(values);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	return (
		<div className="flex flex-row justify-center items-center m-16">
			<div className="flex flex-col justify-center items-start w-[85%]">
				<Input
					size="sm"
					name="name"
					label="Name"
					radius="none"
					placeholder="John Doe"
					className="m-1 w-[75%]"
					value={values.name}
					onChange={(e) => {
						setValues({ ...values, name: e.target.value });
					}}
				/>
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
					className="m-1 w-[75%]"
					value={values.password}
					onChange={(e) => {
						setValues({ ...values, password: e.target.value });
					}}
				/>
			</div>
		</div>
	);
};

export default Register;
