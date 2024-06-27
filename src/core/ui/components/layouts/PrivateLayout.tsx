'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Toolbar } from '@/core/ui/components/layouts/Toolbar'
import { Sidebar } from '@/core/ui/components/layouts/Sidebar'

type TPrivateLayoutProps = {
  children: ReactNode
}

export const PrivateLayout = ({ children }: TPrivateLayoutProps) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const toggleSidebar = (): void => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsSidebarVisible(false)
      } else {
        setIsSidebarVisible(true)
      }
    }

    window.addEventListener('resize', handleResize)

    // Set initial state based on screen size
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <div className="flex h-full w-full flex-col p-4 transition-all duration-300">
        <Toolbar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="mt-5 flex w-full">{children}</div>
      </div>
    </div>
  )
}
