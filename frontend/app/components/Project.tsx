// @ts-ignore
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Project = ({ blok }: any) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Project;
