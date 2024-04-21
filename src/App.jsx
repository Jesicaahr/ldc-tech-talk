import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <HomePage />
      </QueryClientProvider>
    </>
  );
}

export default App;
