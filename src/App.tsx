import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import NavigationBar from "./layouts/NavigationBar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationBar />
    </QueryClientProvider>
  );
}

export default App;
