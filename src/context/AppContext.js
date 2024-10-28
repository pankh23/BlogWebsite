import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  

  async function fetchBlogPosts(page = 1, tag=null, category) {
    setLoading(true); 
    let url = `${baseUrl}?page=${page}`;


    try {
      const result = await fetch(url);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const data = await result.json();
      console.log(data); // Log the fetched data
      setPage(data.page);
      setPosts(data.posts); // Make sure this is set correctly
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data:", error.message);
      setPosts([]); // Clear posts on error
    } finally {
      setLoading(false); // Set loading to false after all operations
    }
  }

  function handlePageChange(page) {
    fetchBlogPosts(page)
    setPage(page);
    
  }
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange, // Add this function if needed for pagination
    fetchBlogPosts,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}