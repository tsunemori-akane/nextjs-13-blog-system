interface PlayLayoutProps {
  children: React.ReactNode
}

export default function PlayLayout({children}: PlayLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>
}