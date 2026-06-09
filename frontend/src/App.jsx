import { useState } from "react";
import "./App.css";
import TodoNavigation from "./Navigation/TodoNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TodoNavigation />
      </QueryClientProvider>
    </>
  );
}

export default App;
