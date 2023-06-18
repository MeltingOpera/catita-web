/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/* Import components*/
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Project from "./Project";
import Showcase from "./Showcase";
import Section from "./Section";

const components = {
  feature: Feature,
  grid: Grid,
  section: Section,
  teaser: Teaser,
  page: Page,
  project: Project,
  showcase: Showcase,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "FmLYl8chKSthXybdgEQ0NQtt",
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
