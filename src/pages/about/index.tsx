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
    <h2>About!</h2>
    <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
      {contents.map((content, i) => (
        <li key={i}>
          <article>
            <div className="grid overflow-hidden relative items-start p-3 rounded-xl sm:p-5 md:grid-cols-8 xl:grid-cols-9 xl:p-6">
              <h3 className="mb-1 ml-9 font-semibold text-gray-900 md:col-span-6 md:col-start-3 md:ml-0 xl:col-span-7 xl:col-start-3">
                {content.title}
              </h3>
              <time
                dateTime={content.since}
                className="flex row-start-1 items-center mb-1 font-medium text-gray-500 md:col-span-2 md:col-start-1 md:row-end-3 md:mb-0"
              >
                <svg
                  viewBox="0 0 12 12"
                  className={`w-3 h-3 mr-6 overflow-visible ${
                    content.isActive ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {content.isActive ? (
                    <>
                      <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                      <circle
                        cx="6"
                        cy="6"
                        r="11"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></circle>
                    </>
                  ) : (
                    <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                  )}
                  {i === 0 && (
                    <path
                      d="M 6 -6 V -45"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="text-gray-200"
                    ></path>
                  )}
                  {contents.length === i + 1 && (
                    <path
                      d="M 6 18 V 500"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="text-gray-200"
                    ></path>
                  )}
                </svg>
                {content.since}
                {content.until ? (
                  <>
                    <br />-{content.until}
                  </>
                ) : (
                  <></>
                )}
              </time>
              {content.body && (
                <p className="ml-9 text-gray-500 md:col-span-6 md:col-start-3 md:ml-0 xl:col-span-7">
                  {content.body}
                </p>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  </>
);
