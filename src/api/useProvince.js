import { useQuery } from "@tanstack/react-query"

export function useGetProvince(props) {
const options = props?.options ||{}

const { data, isLoading } = useQuery({
    queryKey: ["PROVINCES"],
    queryFn: async () => {
      return await fetch(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    ...options

  });
  return {data, isLoading}
}