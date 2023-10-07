import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Pagination from "./components/UI/Pagination";

export default function App() {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('react');

  const [currentPage, setCurrentPage] = useState(1);
  
  const handleSearchItems = (item) => {
    setSearch(item);
    console.log(`From App ${item}`);
  }
  
  
  const itemsPerPage  = 10
  const totalItems = data.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

   // Slice the data based on currentPage and itemsPerPage
   const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  useEffect(() => {
    NewsData();
  }, [search, currentPage]);



  async function NewsData() {
    setStatus("Loading");
    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=70`);


      console.log("Data:", response);

      if (!response.ok) {
        setStatus('error');
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data.hits);
      setStatus("success");

    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus("error");
    }
  }


  return (
    <div className="px-10 h-screen flex flex-col justify-between">
      <Navbar handleSearchItems={handleSearchItems} />
      <p className="mt-16 text-lg font-semibold ">Today's News</p>
      <News displayedData={displayedData} status={status} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      <Footer />
    </div>
  )
}