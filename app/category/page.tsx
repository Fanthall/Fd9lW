import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import ImageSlider from "../components/image-slider/ImageSlider";

const Category = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start items-center p-16">
			<Header />
			<div className="w-full h-[600px] flex flex-row justify-center items-center ">
				<ImageSlider imageHeightPx={400} />
			</div>
			<div className="w-full h-fit flex flex-row justify-center items-center mt-5 pb-20">
				<Categories />
			</div>
		</div>
	);
};

export default Category;
