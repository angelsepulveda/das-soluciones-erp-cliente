'use client'

import { Card, CardBody } from '@material-tailwind/react'
import { ReactNode } from 'react'

type TDCardProps = {
  children: ReactNode
  className?: string
}

export const DCard = ({ children, className }: TDCardProps) => {
  return (
    <Card className={className}>
      <CardBody>{children}</CardBody>
    </Card>
  )
}
