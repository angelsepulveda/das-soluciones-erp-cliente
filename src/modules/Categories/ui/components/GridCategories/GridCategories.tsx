'use client'

import { useGridCategories } from '@/modules/Categories/ui/components/GridCategories/hooks'
import { CategoryDto } from '@/modules/Categories/infrastructure/dto/categoryDto'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

export const GridCategories = () => {
  const {
    data,
    disabledBack,
    nextPage,
    prevPage,
    currentPage,
    arrayOfPages,
    totalPages,
    setPage,
    disabledNext,
  } = useGridCategories()

  return (
    <div className="relative flex h-full w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-none bg-white bg-clip-border text-gray-700">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Categorías
            </h5>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Listado de Categorías
            </p>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <div className="absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </div>
                <input className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Buscar
                </label>
              </div>
            </div>
            <button
              className="flex select-none items-center gap-3 rounded-lg bg-gray-900 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Agregar
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-scroll p-6 px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Nombre
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Descripcón
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Estado
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                  Opciones
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.items.map((item: CategoryDto) => {
              return (
                <tr key={item.id}>
                  <td className="border-b border-blue-gray-50 p-4">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      {item.name}
                    </p>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                      {item.description}
                    </p>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <div className="w-max">
                      {item.status ? (
                        <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-green-900">
                          <span className="">Activo</span>
                        </div>
                      ) : (
                        <div className="relative grid select-none items-center whitespace-nowrap rounded-md bg-green-500/20 px-2 py-1 font-sans text-xs font-bold uppercase text-red-900">
                          <span className="">Desactivado</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <Tooltip content="Editar categoría">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    {item.status ? (
                      <Tooltip content="Desactivar categoría">
                        <IconButton variant="text">
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip content="Activar categoría">
                        <IconButton variant="text">
                          <CheckIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <button
          className="select-none rounded-lg border border-gray-900 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          disabled={disabledBack}
          onClick={() => prevPage()}
        >
          Anterior
        </button>

        <div className="flex items-center gap-2">
          {arrayOfPages.map((page) => {
            console.log(currentPage, 'currentPage')
            console.log(page, 'page')
            if (page <= totalPages)
              return (
                <IconButton
                  variant={currentPage == page ? `outlined` : 'text'}
                  size="sm"
                  key={page.toString()}
                  onClick={() => setPage(page)}
                >
                  {page}
                </IconButton>
              )
          })}
        </div>
        <button
          className="select-none rounded-lg border border-gray-900 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          disabled={disabledNext}
          onClick={() => nextPage()}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
