import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { About } from "src/pages/about";

const AboutPage: CustomNextPage = () => <About />;

AboutPage.getLayout = Layout;

export default AboutPage;
