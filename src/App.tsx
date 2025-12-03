import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import Diagnostico from "./pages/Diagnostico";
import DiagnosticReport from "./pages/DiagnosticReport";
import AgentesIA from "./pages/AgentesIA";
import DesenvolvimentoWeb from "./pages/DesenvolvimentoWeb";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/diagnostico/resultado" element={<DiagnosticReport />} />
          <Route path="/servicos/desenvolvimento-web" element={<DesenvolvimentoWeb />} />
          <Route path="/servicos/agentes-de-ia" element={<AgentesIA />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;