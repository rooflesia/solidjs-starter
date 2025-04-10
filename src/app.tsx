import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

import "./app.css";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Router
      root={props => (
        <MetaProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense>{props.children}</Suspense>
          </QueryClientProvider>

        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
