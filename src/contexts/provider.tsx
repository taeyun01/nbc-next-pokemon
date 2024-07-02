"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ONE_HOUR = 60 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // SSR에서는 클라이언트에서 즉시 재요청하는 것을 피하기 위해,
      // default staleTime을 0보다 높게 설정하는 것이 일반적입니다.
      //staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      staleTime: ONE_HOUR * 3,
      gcTime: ONE_HOUR * 3,
    },
  },
});

const QueryProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
