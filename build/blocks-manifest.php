<?php
// This file is generated. Do not modify it manually.
return array(
	'pix-split' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'pix-split/slider',
		'version' => '0.1.0',
		'title' => 'Pix Split',
		'category' => 'media',
		'icon' => 'embed-photo',
		'description' => 'Before After Image Slider for Gutenberg to compare two images with a draggable slider.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'pix-split',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'beforeImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'afterImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'beforeLabel' => array(
				'type' => 'string',
				'default' => 'Before'
			),
			'afterLabel' => array(
				'type' => 'string',
				'default' => 'After'
			)
		)
	)
);
