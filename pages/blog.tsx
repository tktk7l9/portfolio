import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { Blog } from "src/pages/blog";

const BlogPage: CustomNextPage = () => <Blog />;

BlogPage.getLayout = Layout;

export default BlogPage;
