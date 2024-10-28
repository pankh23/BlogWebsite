import React, { useContext, useEffect } from "react";
import "./App.css";
import Blog from './components/Blog';
import Header from './components/Header';
import { Pagination } from './components/Pagination';
import AppContextProvider, { AppContext } from "./context/AppContext";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    // <AppContextProvider>
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-1 bg-blue-100">
        <Header />
        <Blog />
        <Pagination />
      </div>
    // </AppContextProvider>
  );
}