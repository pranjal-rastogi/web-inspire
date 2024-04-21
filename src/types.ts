export type Tag = {
  key: string;
  value: string;
}

export interface Website {
  id: string;
  name: string;
  url: string;
  tags: Array<Tag>;
  title: string;
  published: boolean;
  lastUpdated: string;
  siteNumber: number;
}

export type ProcessedTag = {
  key: string;
  value: string;
}

export interface ProcessedWebsite extends Omit<Website, "tags"> {
  tags: ProcessedTag[];
}