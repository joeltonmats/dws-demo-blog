import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/debug/Home";
import PostDetailsPage from "../pages/debug/PostDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
