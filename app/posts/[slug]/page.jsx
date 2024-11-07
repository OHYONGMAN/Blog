import PostDetail from "./post-detail";

export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: slug,
    description: "블로그 포스트 상세 페이지",
  };
}

export default function PostDetailPage({ params }) {
  const { slug } = params;

  return <PostDetail slug={slug} />;
}
