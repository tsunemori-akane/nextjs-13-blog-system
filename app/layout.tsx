import React from 'react';
import "#/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className='min-h-screen'>
        {children}
      </body>
    </html>
  )
}
