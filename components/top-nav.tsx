"use client"

import React from "react"
import Link from "next/link"
import styled from 'styled-components'

type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

type MainNavItem = NavItem

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}



export function MainNav({ item, children }: MainNavProps) {
  return (
    <div className="flex gap-6">
      
    </div>
  )
}