// query-client.ts
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

export const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24, // 24h
      retry: 1,
      experimental_prefetchInRender: true,
    },
  },
});

if (typeof window !== "undefined") {
  const storagePersister = createSyncStoragePersister({
    storage: sessionStorage,
  });

  persistQueryClient({
    queryClient: query_client,
    persister: storagePersister,
    maxAge: 1000 * 60 * 60 * 24, // 24h
  });
}

// if usa localStorage debe ejecutar en el layout clear_query_client_if_refresh.ts
// <script>
//   import "@solid/tan_stack_query/clear_query_client_if_refresh.ts";
// </script>
