import Image from "next/image";
import error from "../public/images/error.png";
import Wrapper from "@/styled-components/not-found.styels";

export default function NotFound() {
  return (
    <Wrapper>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Image
        src={error}
        alt="에러 이미지"
        width={600}
        height={400}

      />
    </Wrapper>
  );
}
