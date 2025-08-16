export default function ImageSlider({
	beforeLabel,
	afterLabel,
	beforeImage,
	afterImage,
}) {
	return (
		<div className={`pix-split-slider`}>
			<img src={beforeImage} alt={beforeLabel} data-label={beforeLabel} />
			<img src={afterImage} alt={afterLabel} data-label={afterLabel} />
		</div>
	);
}
