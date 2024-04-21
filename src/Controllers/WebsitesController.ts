import { websites } from "@/data/websites";
import { ProcessedWebsite } from "@/types";

export function getWebsites(tags?: string[]): ProcessedWebsite[] {
  let processedWebsites = websites
    .sort((a, b) => b.siteNumber < a.siteNumber ? -1 : 1)
    .filter((website) => website.published);

  if (tags && tags.length > 0 && tags[0] !== '') {
    processedWebsites = processedWebsites.filter((website) => {
      const websiteTags = website.tags.map((tag) => tag.key);
      return tags.every((tag) => websiteTags.includes(tag));
    });
  }

  return processedWebsites;
}