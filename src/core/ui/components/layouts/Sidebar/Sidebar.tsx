'use client'

import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'
import { itemsSidebar } from '@/core/ui/components/layouts/Sidebar/utils'
import { useRouter } from 'next/navigation'

type TSidebarProps = {
  isSidebarVisible: boolean
}

export const Sidebar = ({ isSidebarVisible }: TSidebarProps) => {
  const router = useRouter()
  const [open, setOpen] = useState<number>(0)

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <Card
      className={`duration-400 h-full w-[300px] rounded-none bg-[#29363E] p-4 text-white shadow-xl shadow-blue-gray-900/5 transition-all ${isSidebarVisible ? 'block' : 'hidden'}`}
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/static/LogoBlanco.png" alt="brand" className="h-12 w-full" />
      </div>
      <List>
        {itemsSidebar.map((item) => {
          return (
            <Accordion
              key={item.id}
              open={open === item.id}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 text-white transition-transform ${open === item.id ? 'rotate-180' : ''}`}
                />
              }
            >
              <ListItem
                className="p-0 text-white hover:rounded-xl hover:bg-[#37474F] hover:text-white focus:bg-[37474F] active:bg-[37474F]"
                selected={open === item.id}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="border-b-0 p-3 text-white hover:rounded-xl hover:border-none hover:bg-[#37474F] hover:text-white focus:bg-[#37474F] focus:text-white active:bg-[37474F]"
                >
                  <ListItemPrefix>{item.icon}</ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal text-white">
                    {item.title}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1 text-white">
                <List className="p-0 text-white">
                  {item.items.map((subItem) => {
                    return (
                      <ListItem
                        key={subItem.label}
                        onClick={() => router.push(subItem.path)}
                        className="hover:bg-[#37474F] hover:text-white focus:bg-[#37474F] focus:text-white active:bg-[37474F]"
                      >
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
                        </ListItemPrefix>
                        {subItem.label}
                      </ListItem>
                    )
                  })}
                </List>
              </AccordionBody>
            </Accordion>
          )
        })}
      </List>
    </Card>
  )
}
