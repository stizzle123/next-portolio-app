import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <>
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="angular-post" title="Angular Post" />
      <PostLink slug="vue-post" title="Vue Post" />
    </ul>
  </>
);

export default Blog;
