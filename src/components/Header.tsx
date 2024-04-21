import Link from "next/link";

export default function _() {
  return (
    <header className="w-full border-b border-neutral-700">
      <div className="flex gap-4 justify-between items-center text-xl py-8 px-8 sm:py-4 sm:px-4 lg:py-8 lg:px-8 max-w-screen-2xl mx-auto">
        <section className="flex flex-col gap-2 justify-center items-start">
          <Link href="/" className="text-neutral-50 text-base sm:text-3xl">Web Inspire</Link>
          <p className="text-neutral-500 text-sm hidden sm:block">A curated list of good-looking websites.</p>
        </section>
        <section>
          <nav className="text-neutral-50 text-base flex gap-4 sm:gap-8 sm:text-lg">
            <a className="underline-offset-4 underline decoration-transparent hover:decoration-neutral-500 duration-150" href="https://github.com/pranjal-rastogi/web-inspire" target="_blank">GitHub</a>
          </nav>
        </section>
      </div>
    </header>
  )
}