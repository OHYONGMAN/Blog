import Grid from "@/styled-components/post-grid.styles";
import PostItem from "./post-item";

export default function PostGrid({ posts = [] }) {
  // 날짜를 기준으로 내림차순 정렬 (최신 글이 위로 오도록)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Grid>
      {sortedPosts.length > 0 ? (
        sortedPosts.map((post) => <PostItem key={post.slug} post={post} />)
      ) : (
        <p>검색된 결과가 없습니다.</p>
      )}
    </Grid>
  );
}
