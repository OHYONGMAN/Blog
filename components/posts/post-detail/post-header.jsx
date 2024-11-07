import Header from "@/styled-components/post-header.styles";
import Image from "next/image";

export default function PostHeader(props) {
  const { title, image } = props;

  return (
    <Header>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </Header>
  );
}
