import classNames from "classnames";
import parse, { Element } from "html-react-parser";
import Parser from "rss-parser";
import styles from "./styles.module.css";

type RSSFeed = { title: string };
type RSSItem = {
  title: string;
  link: string;
  pubDate: string;
  "content:encoded": string;
  content: string;
};

const rssParser: Parser<RSSFeed, RSSItem> = new Parser({
  customFields: { item: [["content:encoded", "content"]] },
});
const feed = await rssParser.parseURL("https://dorukgezici.medium.com/feed");

export default function MediumFeed({ className }: { className: string }) {
  return (
    <div className={classNames(className)}>
      {feed.items.map((item) => (
        <a
          key={item.guid}
          className={classNames(styles.card, "w-2/3 lg:w-1/3 xl:w-1/4")}
          href={item.link}
          target="_blank"
        >
          <div className={styles.image}>
            {parse(item.content, {
              replace: (node) => {
                if (!(node instanceof Element)) return;
                // display just the post image
                if (!["figure", "img"].includes(node.tagName)) return <></>;
              },
            })}
          </div>

          <h2 className="text-4xl my-4 text-neutral-200">{item.title}</h2>
          <h4 className="text-xl my-4 text-neutral-300">{new Date(item.pubDate).toLocaleDateString()}</h4>
          <h4 className="text-md my-4 flex flex-wrap justify-center gap-2 text-neutral-300">
            {item.categories?.map((category) => (
              <span key={category} className={styles.category}>
                #{category}{" "}
              </span>
            ))}
          </h4>

          <div className={classNames(styles.content, "my-4 text-neutral-400")}>
            {parse(item.content, {
              replace: (node) => {
                if (!(node instanceof Element)) return;
                // display just the first content paragraph
                if (node.previousSibling) return <></>;
              },
            })}
          </div>
        </a>
      ))}
    </div>
  );
}
