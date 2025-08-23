import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

const ALLOWED_MEDIA_TYPES = ["image"];

const DEFAULT_BEFORE =
	"https://www.cams-it.com/wp-content/uploads/2015/05/default-placeholder-300x200.png";
const DEFAULT_AFTER = "https://www.tgsin.in/images/joomlart/demo/default.jpg";

export default function Edit({ attributes, setAttributes }) {
	const { beforeLabel, afterLabel, afterImage, beforeImage } = attributes;

	// 👇 handle image selection
	const onSelectBefore = (media) => {
		if (!media || !media.url) return;
		setAttributes({ beforeImage: media.url });
	};
	const onSelectAfter = (media) => {
		if (!media || !media.url) return;
		setAttributes({ afterImage: media.url });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Slider Settings", "pix-split")}>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__("Before Label", "pix-split")}
						value={beforeLabel || ""}
						onChange={(value) => setAttributes({ beforeLabel: value })}
					/>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__("After Label", "pix-split")}
						value={afterLabel || ""}
						onChange={(value) => setAttributes({ afterLabel: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="pixsplit-editor">
				<div className="pixsplit-edit-images">
					<div className="pixsplit-edit-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectBefore}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} className="pixsplit-image-button">
										<img
											src={beforeImage || DEFAULT_BEFORE}
											alt="Before"
											style={{ maxWidth: "100%", cursor: "pointer" }}
										/>
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<p className="pixsplit-label">Before</p>
					</div>

					<div className="pixsplit-edit-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectAfter}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} className="pixsplit-image-button">
										<img
											src={afterImage || DEFAULT_AFTER}
											alt="After"
											style={{ maxWidth: "100%", cursor: "pointer" }}
										/>
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<p className="pixsplit-label">After</p>
					</div>
				</div>
				<div className={`beer-slider horizontal`} data-beer-label={beforeLabel}>
					<img src={beforeImage || DEFAULT_BEFORE} alt={beforeLabel} />
					<div className="beer-reveal" data-beer-label={afterLabel}>
						<img src={afterImage || DEFAULT_AFTER} alt={afterLabel} />
					</div>
				</div>
			</div>
		</>
	);
}
