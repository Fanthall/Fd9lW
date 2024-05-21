import { Input } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
interface RegisterProps {
	onChange: (values: {
		email: string;
		name: string;
		password: string;
	}) => void;
	errors?: {
		name?: string;
		email?: string;
		password?: string;
	};
}
const Register: FunctionComponent<RegisterProps> = (props) => {
	const [values, setValues] = useState<{
		name: string;
		email: string;
		password: string;
	}>({ name: "", email: "", password: "" });
	const [touched, setTouched] = useState<{
		name: boolean;
		email: boolean;
		password: boolean;
	}>({
		email: false,
		password: false,
		name: false,
	});
	const [errors, setErrors] = useState<
		{ name?: string; email?: string; password?: string } | undefined
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
					name="name"
					label="Name"
					radius="none"
					placeholder="John Doe"
					className="m-1 w-[75%]"
					value={values.name}
					onChange={(e) => {
						setValues({ ...values, name: e.target.value });
						setTouched({ ...touched, name: true });
					}}
					isInvalid={errors?.name != undefined && touched.name}
					errorMessage={props.errors?.name}
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
			</div>
		</div>
	);
};

export default Register;
