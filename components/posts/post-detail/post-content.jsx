import ReactMarkdown from "react-markdown";
import Content from "@/styled-components/post-content.styles";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useMemo } from "react";

export default function PostContent({ post }) {
  const imagePath = useMemo(
    () => (post.image ? `/images/posts/${post.slug}/${post.image}` : ""),
    [post.slug, post.image]
  );

  const customComponents = {
    p: ({ node, children, ...props }) => {
      if (node.children[0]?.tagName === "img") {
        const image = node.children[0].properties;
        return (
          <div className="image">
            <Image
              src={image.src ? `/images/posts/${post.slug}/${image.src}` : ""}
              alt={image.alt || ""}
              width={600}
              height={300}
              className="image"
            />
          </div>
        );
      }
      return <p {...props}>{children}</p>;
    },

    code: ({ className, children, inline }) => {
      const language = className?.replace("language-", "");
      return inline ? (
        <code className={className}>{children}</code>
      ) : (
        <SyntaxHighlighter style={atomDark} language={language}>
          {String(children).trim()}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <Content>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </Content>
  );
}
