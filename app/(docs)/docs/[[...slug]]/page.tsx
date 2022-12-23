import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "#/components/docs/mdx"
import "#/styles/mdx.css"

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({params}) {
  const slug = params?.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    notFound()
  }

  return (
    <main className="ml-6 relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Mdx code={doc.body.code} />
        <hr className="my-4 border-slate-200 md:my-6" />
      </div>
    </main>
  )
}
