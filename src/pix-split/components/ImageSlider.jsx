export default function ImageSlider({
	beforeLabel,
	afterLabel,
	beforeImage,
	afterImage,
}) {
	return (
		<div className={`beer-slider horizontal`} data-beer-label={beforeLabel}>
			<img src={beforeImage} alt={beforeLabel} />
			<div className="beer-reveal" data-beer-label={afterLabel}>
				<img src={afterImage} alt={afterLabel} />
			</div>
		</div>
	);
}
