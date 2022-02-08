import type { VFC } from "react";

type BlogItem = {
  id: number;
  title: string;
};

export const Blog: VFC = () => {
  const blogs: BlogItem[] = [
    { id: 1, title: "Title1" },
    { id: 2, title: "Title2" },
  ];
  return (
    <>
      <ul>
        {blogs.map((blog: BlogItem) => (
          <li key={blog.id}>
            <span>{blog.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
