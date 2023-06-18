import { storyblokEditable } from "@storyblok/react";

const Showcase = ({ blok }: any) => {
  return (
    <div className="md:columns-3" {...storyblokEditable(blok)}>
      {blok.projects.map((article: any) => {
        return <h1>{article.slug}</h1>;
      })}
    </div>
  );
};
export default Showcase;
