'use client'

import { IconButton, Navbar, Typography } from '@material-tailwind/react'

import { ProfileMenu } from '@/core/ui/components/layouts/Toolbar/partials/ProfileMenu'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type TToolbarProps = {
  isSidebarVisible: boolean
  toggleSidebar: () => void
}
// profile menu component
export function Toolbar({ isSidebarVisible, toggleSidebar }: TToolbarProps) {
  return (
    <Navbar className="w-full rounded-xl p-2 pl-6" fullWidth>
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <IconButton variant="text" size="lg" onClick={toggleSidebar}>
          {isSidebarVisible ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
        <ProfileMenu />
      </div>
    </Navbar>
  )
}
