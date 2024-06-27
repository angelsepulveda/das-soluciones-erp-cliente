import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'

export const itemsSidebar = [
  {
    title: 'Almacén',
    icon: <BuildingStorefrontIcon className="h-5 w-5" />,
    id: 1,
    items: [
      {
        label: 'Categorias',
        path: 'categorias',
      },
      {
        label: 'Productos',
        path: 'productos',
      },
      {
        label: 'Marcas',
        path: 'marcas',
      },
    ],
  },
]
