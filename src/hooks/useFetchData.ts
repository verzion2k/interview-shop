import { useEffect, useState } from "react";

export function useFetchData<T>(cb: () => Promise<T>): [T | null, boolean] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await cb();
        setData(response);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cb]);

  return [data, loading];
}
