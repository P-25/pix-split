import "beerslider/dist/BeerSlider.css";
import BeerSlider from "beerslider";

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".beer-slider").forEach((slider) => {
		new BeerSlider(slider);
	});
});
