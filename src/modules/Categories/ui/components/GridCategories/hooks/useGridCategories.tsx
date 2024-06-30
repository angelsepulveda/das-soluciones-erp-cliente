import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAll } from '@/modules/Categories/infrastructure/services/categoryService'

export const useGridCategories = () => {
  const [page, setPage] = useState<number>(1)
  const [searchParams, setSearchParams] = useState<string>('')
  const [disabledBack, setDisabledBack] = useState<boolean>(true)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [startPage, setStartPage] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [disabledNext, setDisabledNext] = useState<boolean>(false)

  const { data } = useQuery({
    queryKey: ['categories', { page, searchParams }],
    queryFn: () => getAll(page, searchParams),
  })

  const arrayOfPages = Array.from({ length: totalPages }, (_, i) => startPage + i)

  useEffect(() => {
    const value = data?.totalPages && data.totalPages > 1 && data?.currentPage != 1
    const currentPageValue = data?.currentPage ?? 0
    const dataValueTotal = data?.totalPages ?? 0
    setCurrentPage(Number(currentPage))
    const currentBlockStartPage =
      Math.floor((currentPageValue - 1) / dataValueTotal) * dataValueTotal + 1
    const nextValue = data?.totalPages == currentPageValue
    setDisabledNext(!nextValue)
    setCurrentPage(currentPageValue)
    setStartPage(currentBlockStartPage)
    setTotalPages(data?.totalPages ?? 0)
    setDisabledBack(!!value)
  }, [data])

  const nextPage = () => {
    if (data?.items.length === 0) return

    setPage(Number(page) + 1)
  }

  const prevPage = () => {
    if (page > 1) setPage(Number(page) - 1)
  }

  return {
    page,
    data,
    disabledBack,
    prevPage,
    nextPage,
    arrayOfPages,
    totalPages,
    currentPage,
    setPage,
    disabledNext,
  }
}
