import {getImage} from "astro:assets";
import LogoImg from "../../public/logo.png";

export const processImage = async (img: any, width: number) => {
	return (
		await getImage({
			src: img,
			width: width,
			format: "webp",
		})
	).src;
};

export const getLogo = async (width = 56) => await processImage(LogoImg, width);
