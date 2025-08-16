import ImageSlider from "./components/ImageSlider";
export default function save({ attributes }) {
	const { beforeImage, afterImage, beforeLabel, afterLabel } = attributes;
	return (
		<ImageSlider
			beforeLabel={beforeLabel}
			afterLabel={afterLabel}
			beforeImage={beforeImage}
			afterImage={afterImage}
		/>
	);
}
