import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Source from "./pages/Source";
import Creativity from "./pages/Creativity";
import Growth from "./pages/Growth";
import About from "./pages/About";
import Colleagues from "./pages/Colleagues";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import Membership from "./pages/Membership";
import MembershipReturn from "./pages/MembershipReturn";

import { AuthProvider } from "./hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/article/:id" element={<ProjectDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<ProjectDetail />} />
            <Route path="/source" element={<Source />} />
            {/* Legacy redirects */}
            <Route path="/wellness" element={<Blogs />} />
            <Route path="/travel" element={<Blogs />} />

            <Route path="/creativity" element={<Creativity />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/about" element={<About />} />
            <Route path="/colleagues" element={<Colleagues />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/membership/return" element={<MembershipReturn />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
