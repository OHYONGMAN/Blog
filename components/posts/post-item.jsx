import {
  Post,
  NavLink,
  ImageWrap,
  ContentWrap,
} from "@/styled-components/post-item.styles";
import Image from "next/image";
import mainImage from "../../public/images/main-image.png";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("ko-kr", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const imagePath = image ? `/images/posts/${slug}/${image}` : null;
  const linkPath = `/posts/${slug}`;

  return (
    <Post>
      <NavLink href={linkPath}>
        <ImageWrap>
          {imagePath ? (
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          ) : (
            <Image
              src={mainImage}
              alt="기본 이미지입니다."
              width={300}
              height={200}
              layout="responsive"
            />
          )}
        </ImageWrap>
        <ContentWrap>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </ContentWrap>
      </NavLink>
    </Post>
  );
}
