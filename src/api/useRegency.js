import { useQuery } from "@tanstack/react-query"

export function useGetRegency(props) {
  const options = props?.options ||{}
  const provinceId = props?.provinceId || false

  const { data, isLoading } = useQuery({
    queryKey: ["REGENCIES", provinceId],
    queryFn: async () => {
      return await fetch(
        `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    enabled: Boolean(provinceId),
    ...options,
  });
  return { data, isLoading };
}

