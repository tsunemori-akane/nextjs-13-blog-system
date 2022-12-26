import Link from "next/link";
import React from "react";
import { MainNav } from "#/components/top-nav";
import { MainNavRoute } from "#/appConfigs/mainnavroute"
interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({children}: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 sticky top-0 z-40 w-full border-b border-slate-200 bg-docsy-blue" p>
        <div className="flex items-center h-16 sm:justify-between">
          <MainNav items={ MainNavRoute }/>
        </div>
      </header>
      <div>{children}</div>
    </div>
  )
}