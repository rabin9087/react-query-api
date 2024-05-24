import "./App.css";
import ReactQueryExample from "./reactQuery/ReactQueryExample";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryExample />
    </QueryClientProvider>
  );
}

export default App;
