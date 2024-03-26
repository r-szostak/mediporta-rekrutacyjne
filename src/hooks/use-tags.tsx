import axios from "axios"
import useSWR from "swr"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export const useTags = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.stackexchange.com/2.3/ts?order=desc&sort=popular&site=stackoverflow`,
    fetcher
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}
