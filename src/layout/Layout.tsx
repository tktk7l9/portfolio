import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const Layout: CustomLayout = (page) => (
  <div className="flex flex-col items-center mx-auto max-w-screen-md min-h-screen">
    <header className="pt-6">
      <Header />
    </header>
    <main className="flex-1 pt-6">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);
