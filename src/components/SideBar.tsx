'use client';

import { allTags } from "@/data/tags";
import clsx from "clsx";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function SideBar() {
  const pathname = usePathname();

  const [tags, setTags] = useState<string[]>([]);
  const [filterToggle, setFilterToggle] = useState<boolean>(false);
  const router = useRouter();

  function handleAddTag(tag: string) {
    setTags([...tags, tag]);
  }

  function handleRemoveTag(tag: string) {
    setTags(tags.filter(t => t !== tag));
  }

  useEffect(() => {
    if (tags.length > 0) {
      router.push('/search/' + tags.join('/'));
    } else {
      router.push('/');
    }
  }, [tags, router]);

  useEffect(() => {
    if (pathname.includes('search')) {
      setTags(pathname.split('/').slice(2));
    } else {
      setTags([]);
    }
  }, [pathname]);

  function handleFilterToggle() {
    window.scrollTo(0, 0);
    document.body.classList.toggle('overflow-hidden');
    setFilterToggle(!filterToggle);
  }

  return (
    <aside className="flex flex-col gap-2 relative flex-none w-full sm:max-w-[15rem] h-min sm:mb-16">
      <button
        className="flex gap-2 justify-between items-center text-neutral-50 text-left py-4 px-6 border border-neutral-700 sm:hidden"
        onClick={() => handleFilterToggle()}
      >
        Filters
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={clsx(
        "bg-neutral-950 overflow-auto rounded-sm flex-col items-start justify-start border-0 border-transparent h-0 fixed top-[calc(10.125rem)] left-0 w-[calc(100%-2px)] z-30 sm:border sm:border-neutral-700 sm:flex sm:relative sm:top-0 sm:left-0 sm:h-min sm:w-full sm:bg-transparent transition-all duration-500 will-change-auto",
        filterToggle && 'h-[calc(100%-10.125rem+1px)] border-neutral-700'
      )}>
        {
          allTags.map((tag, tagIndex) => {
            return (
              <div key={tagIndex + tag.key} className="w-full flex flex-col gap-2 p-8 border-b last:border-none border-neutral-700">
                <h2 className="text-sm text-neutral-500 font-semibold uppercase mb-3">{tag.key.replace('-', ' ')}</h2>
                <ul className="text-neutral-200 flex flex-col gap-3 flex-wrap">
                  {
                    Object.values(tag.value).map((value, valueIndex) => {
                      return (
                        <li key={valueIndex + value.key}>
                          <label className="inline-flex gap-3 justify-start items-center relative">
                            <input
                              type="checkbox"
                              className="w-5 h-5 relative appearance-none text-neutral-50 after:content-[''] after:rounded-sm after:cursor-pointer after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:z-10 after:h-full after:w-full after:border after:border-neutral-700 after:bg-transparent peer after:hover:border-neutral-50 after:duration-150 after:transition-all after:will-change-auto"
                              checked={tags.includes(value.key)}
                              onChange={(e) => {
                                e.target.checked ? handleAddTag(value.key) : handleRemoveTag(value.key);
                                // handleFilterToggle();
                              }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 opacity-0 peer-checked:opacity-100 absolute top-1/2 left-[.125rem] -translate-y-1/2 pointer-events-none">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-sm text-neutral-200">{value.value}</span>
                          </label>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </aside>
  )
}