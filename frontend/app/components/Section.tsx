// @ts-ignore
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Section = ({ blok }: any) => {
  return (
    <div
      style={{
        backgroundColor: blok.background.value ? blok.background.value : "#fff",
      }}
      className={`px-5 py-12 md:px-10`}
      {...storyblokEditable(blok)}
    >
      {blok.content.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Section;
