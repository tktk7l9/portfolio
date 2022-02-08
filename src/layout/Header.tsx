import type { VFC } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

/**
 * @package
 */
export const Header: VFC = () => (
  <div>
    <h1>{`Takuya Saito's Portfolio`}</h1>
    <nav>
      {items.map(({ href, label }) => (
        <NavLink key={href} href={href} activeClassName="text-red-500">
          <a className="inline-block p-4">{label}</a>
        </NavLink>
      ))}
    </nav>
  </div>
);
