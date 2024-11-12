import Grid from "@/styled-components/post-grid.styles";
import PostItem from "./post-item";

export default function PostGrid({ posts = [] }) {
  return (
    <Grid>
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.slug} post={post} />)
      ) : (
        <p>검색된 결과가 없습니다.</p>
      )}
    </Grid>
  );
}
