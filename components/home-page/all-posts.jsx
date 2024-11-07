import PostGird from "@/components/posts/post-grid";
import AllPostWrap from '@/styled-components/all-posts.styles';

export default function AllPosts(props) {
  return (
    <AllPostWrap>
      <h1>All Posts</h1>
      <PostGird posts={props.posts} />
    </AllPostWrap>
  );
}
