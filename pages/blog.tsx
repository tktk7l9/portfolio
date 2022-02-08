import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";
import { Blog } from "src/pages/blog";

const BlogPage: CustomNextPage = () => <Blog />;

BlogPage.getLayout = FixedLayout;

export default BlogPage;
