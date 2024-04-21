import { ProcessedWebsite } from "@/types";
import Link from "next/link";

export default function Card({ website, lazy }: { website: ProcessedWebsite, lazy: boolean }) {
  // const imageBaseURL = typeof window === 'undefined' ? "/images/websites" : "/web-inspirations/images/websites";
  const imageBaseURL = "/images/websites";
  const { id, title, url } = website;

  return (
    <div className="relative flex flex-col gap-4 pb-4 rounded-sm overflow-hidden border border-neutral-700 group hover:border-neutral-50 duration-150 transition-all will-change-auto">
      <div className="image-container overflow-hidden relative border-b border-neutral-700 group-hover:border-neutral-50 duration-150 transition-all will-change-auto">
        <picture>
          <source
            srcSet={`${imageBaseURL}/@4x/${id}.jpg`}
            type="image/jpeg"
            media="(min-width: 640px)"
            width="2880"
            height="1640"
          />
          <img
            src={`${imageBaseURL}/@2x/${id}.jpg`}
            alt={title}
            className="w-full h-auto object-cover text-neutral-50 text-xs"
            width="720"
            height="410"
            loading={lazy ? "lazy" : "eager"}
          />
        </picture>
      </div>
      <a
        href={url}
        target="_blank"
        aria-label={id + "-link"}
        className="block static line-clamp-1 text-neutral-50 font-semibold px-4 truncate after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:z-10"
      >
        {title}
      </a>
      <div className="card-footer text-neutral-200 px-4 text-lg flex flex-col justify-center items-start gap-2">
        <div className="tags flex flex-wrap gap-2">
          {
            website.tags.map((tag, index) => {
              return (
                <Link key={index} href={`/search/${tag.key}`} className="z-20 text-neutral-200 rounded-sm px-2 py-1 text-sm lowercase border border-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 duration-150 transition-all will-change-auto">
                  {tag.value}
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}