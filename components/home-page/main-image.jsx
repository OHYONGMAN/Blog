import { MainWrap, ImageWrap } from "@/styled-components/main-image.styles";
import Image from "next/image";
import mainImage from "../../public/images/main-image.png";

export default function MainImage() {
  return (
    <MainWrap>
      <ImageWrap>
        <Image
          src={mainImage}
          alt="메인이미지"
          width={mainImage.width}
          height={mainImage.height}
          style={{ objectFit: "contain" }}
        />
      </ImageWrap>
    </MainWrap>
  );
}
