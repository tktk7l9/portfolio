import type { VFC } from "react";

const contents = [
  {
    title: "日本アイビーエム・ソリューションサービス株式会社",
    since: "2018.04",
    until: "2019.10",
    body: "",
  },
  {
    title: "株式会社トップゲート",
    since: "2019.11",
    until: "2021.06",
    body: "",
  },
  {
    title: "CAPS株式会社",
    since: "2021.06",
    body: "",
    isActive: true,
  },
];

export const About: VFC = () => (
  <>
    <ul className="">
      {contents.map((content, i) => (
        <li key={i}>
          <article>
            <div className="">
              <h3 className="">{content.title}</h3>
              <time dateTime={content.since} className="">
                {content.since}
                {content.until ? <> - {content.until}</> : <></>}
              </time>
              {content.body && <p className="">{content.body}</p>}
            </div>
          </article>
        </li>
      ))}
    </ul>
  </>
);
