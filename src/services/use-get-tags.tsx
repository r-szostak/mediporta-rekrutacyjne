import { PaginationState, SortingState } from "@tanstack/react-table"
import axios from "axios"
import useSWR from "swr"

const baseURL = "https://api.stackexchange.com/2.3/tags"

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw new Error("Failed to fetch data")
  }
}

export const useGetTags = (
  sorting: SortingState,
  pagination: PaginationState
) => {
  const buildURL = (sorting: SortingState) =>
    sorting
      .map((s) => {
        const order = s.desc ? "desc" : "asc"
        const sort = s.id === "count" ? "popular" : s.id
        return `${baseURL}?page=${pagination.pageIndex + 1}&pagesize=${
          pagination.pageSize
        }&order=${order}&sort=${sort}&site=stackoverflow`
      })
      .join(",")

  const tagsURL = buildURL(sorting)

  const { data, error, isLoading } = useSWR(tagsURL, fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}
