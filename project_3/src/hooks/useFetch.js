import { useEffect, useState } from 'react';

export function useFetch(url, dependencies = []) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setState({ data: null, loading: true, error: null });

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}.`);
        }

        const payload = await response.json();

        if (!isMounted) {
          return;
        }

        setState({ data: payload, loading: false, error: null });
      } catch (caughtError) {
        if (!isMounted) {
          return;
        }

        const message =
          caughtError instanceof Error
            ? caughtError.message
            : 'Unable to fetch data right now.';

        setState({ data: null, loading: false, error: message });
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, ...dependencies]);

  return state;
}
