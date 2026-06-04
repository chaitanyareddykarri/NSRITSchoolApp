import {useCallback, useEffect, useRef, useState} from 'react';

const useAsyncResource = (loader, dependencies = []) => {
  const loaderRef = useRef(loader);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loaderRef.current = loader;
  }, [loader]);

  const load = useCallback(
    async (options = {}) => {
      const isRefresh = Boolean(options.forceRefresh);
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);

      try {
        const result = await loaderRef.current(options);
        setData(result);
        return result;
      } catch (loadError) {
        setError(loadError.message || 'Unable to load data');
        return null;
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies,
  );

  useEffect(() => {
    load();
  }, [load]);

  return {
    data,
    loading,
    refreshing,
    error,
    reload: load,
    refresh: () => load({forceRefresh: true}),
  };
};

export default useAsyncResource;
