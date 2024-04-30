import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Layout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="px-12 py-8">
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default Layout;
