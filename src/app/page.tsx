import { getWebsites } from "@/Controllers/WebsitesController";
import Card from "@/components/Card";

export default function Home() {
  const websites = getWebsites();

  return (
    <main className="flex-1 h-min grid grid-cols-1 gap-2 sm:gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {websites.map((website, index) => <Card key={index} website={website} lazy={index > 10} />)}
    </main>
  )
}
