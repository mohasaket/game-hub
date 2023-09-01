import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id?: number;
  name: string;
  image_background: string;
}

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
