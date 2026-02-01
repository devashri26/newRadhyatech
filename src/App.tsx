import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AppRoutes } from "./routes";
import { Layout } from "./components/layout/Layout";
import "./i18n";

const App = () => {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
