import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

export function Beers() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BEERS);

  if (loading) return `Loading...`;

  if (error) return `Errore!`;

  return (
    <section>
      {JSON.stringify(data)}
      <button onClick={refetch}>Refetch!</button>
    </section>
  );
}
