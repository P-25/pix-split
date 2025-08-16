import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

const ALLOWED_MEDIA_TYPES = ["image"];

export default function Edit({ attributes, setAttributes }) {
	const { beforeLabel, afterLabel, afterImage, beforeImage } = attributes;

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

			<div className="pix-split-editor">
				<div>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								console.log(`Debug - media`, media.url);
								setAttributes({ beforeImage: media.url });
							}}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={beforeImage}
							render={({ open }) => (
								<Button onClick={open}>Select Before Image</Button>
							)}
						/>
					</MediaUploadCheck>
					{beforeImage && <img src={beforeImage} width={100} height={100} />}
				</div>

				<div>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								console.log(`Debug - media`, media.url);
								setAttributes({ afterImage: media.url });
							}}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={afterImage}
							render={({ open }) => (
								<Button onClick={open}>Select After Image</Button>
							)}
						/>
					</MediaUploadCheck>
					{afterImage && <img src={afterImage} width={100} height={100} />}
				</div>
			</div>
		</>
	);
}
