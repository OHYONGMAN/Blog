import Header from "@/styled-components/post-header.styles";
import Image from "next/image";

export default function PostHeader(props) {
  const { title, image } = props;

  return (
    <Header>
      <h1>{title}</h1>
      <div>
        {image ? (
          <Image src={image} alt={title} width={200} height={150} />
        ) : null}
      </div>
    </Header>
  );
}
