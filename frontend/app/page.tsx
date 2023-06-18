// @ts-ignore
import { getStoryblokApi } from "@storyblok/react/rsc";
// @ts-ignore
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <section className="overflow-x-hidden">
        <StoryblokStory story={data.story} />
      </section>
    </div>
  );
}

async function fetchData() {
  let sbParams = {
    version: "draft",
    resolve_relations: ["showcase.projects", "project.Categories"],
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
