// @ts-ignore
import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }: any) => (
  <h2 className="text-2xl bold mb-10" {...storyblokEditable(blok)}>
    {blok.name}
  </h2>
);

export default Feature;
