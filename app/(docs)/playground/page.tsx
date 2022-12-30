import Link from "next/link"

const games = [
  {
    name: "2048",
    route: '/playground/2048'
  },
  {
    name: "2048",
    route: '/playground/2048'
  },
  {
    name: "2048",
    route: '/playground/2048'
  },
]


export default function PlaygroundPage() {
  
  return (
    <>
      <div className="p-4 w-full">
        <h1 className="inline-block text-4xl tracking-tight text-slate-900 lg:text-5xl">Games</h1>
        <hr className="my-4 border-slate-200" />
        <div className="grid gap-4 md:grid-cols-4 md:gap-6">
          {
            games.map(item => {
              return (
                <div className="group relative rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg cursor-pointer">
                  <Link href={item.route}>{item.name}</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}