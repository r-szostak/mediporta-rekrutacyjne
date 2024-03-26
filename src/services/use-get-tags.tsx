import axios from "axios"
import useSWR from "swr"

const baseURL =
  "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export const useGetTags = () => {
  const { data, error, isLoading } = useSWR(
    `${baseURL}?order=desc&sort=popular&site=stackoverflow`,
    fetcher
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}
