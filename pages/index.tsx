import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => <Index />;

IndexPage.getLayout = Layout;

export default IndexPage;
