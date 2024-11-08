"use client";

import Image from "next/image";
import mainImage from "../../public/images/main-image.png";
import {
  Post,
  NavLink,
  ImageWrap,
  ContentWrap,
} from "@/styled-components/post-item.styles";

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
        <ImageWrap defaultImage={!imagePath}>
          <Image
            src={imagePath || mainImage}
            alt={imagePath ? title : "기본 이미지입니다."}
            width={150}
            height={150}
            layout="intrinsic"
          />
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
