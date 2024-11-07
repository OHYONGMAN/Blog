import { HeroWrap, ImageWrapper } from "../../styled-components/hero.styles";
import Image from "next/image";
import mainImage from "../../public/images/main-image.png";

export default function MainImage() {
  return (
    <HeroWrap>
      <ImageWrapper>
        <Image
          src={mainImage}
          alt="메인이미지"
          width={mainImage.width} // 이미지의 원본 너비
          height={mainImage.height} // 이미지의 원본 높이
          style={{ objectFit: "contain" }} // 필요에 따라 objectFit 설정 가능
        />
      </ImageWrapper>
    </HeroWrap>
  );
}
