import Header from "@/styled-components/post-header.styles";

export default function PostHeader(props) {
  const { title } = props;

  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
}
