
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Apply from "@/pages/Apply";
import NotFound from "@/pages/NotFound";

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
