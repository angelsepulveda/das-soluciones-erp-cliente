import axiosInterceptorInstance from '@/core/infrastructure/interceptors/axiosInterceptor'
import { PaginationResultDto } from '@/core/infrastructure/models/paginationResultDto'
import { CategoryDto } from '@/modules/Categories/infrastructure/dto/categoryDto'
import { AxiosResponse } from 'axios'

export const getAll = async (page: number, searchParams: string) => {
  const response: AxiosResponse<PaginationResultDto<CategoryDto>> =
    await axiosInterceptorInstance.get(`categories/pagination?limit=${5}&offset=${page}`)

  return response.data
}
