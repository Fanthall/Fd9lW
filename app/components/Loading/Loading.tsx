import { Spinner } from "@nextui-org/react";
import { FunctionComponent } from "react";
interface LoadingProps {
	transparent?: boolean;
}
const Loading: FunctionComponent<LoadingProps> = (props) => {
	return (
		<div
			className={`w-full h-full flex flex-row justify-center items-center ${
				props.transparent ? "opacity-50" : ""
			}`}
		>
			<Spinner />
		</div>
	);
};

export default Loading;
