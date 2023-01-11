import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

export function Users() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.USERS);

  if (loading) return `Loading...`;

  if (error) return `Errore!`;

  return (
    <section>
      {JSON.stringify(data)}
      <button onClick={refetch}>Refetch!</button>
    </section>
  );
}
