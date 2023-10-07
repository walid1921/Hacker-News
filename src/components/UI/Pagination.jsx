


function Pagination({ currentPage, onPageChange, totalPages}) {

  const pageNum = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNum.push(i);
  }

  const handleNext = () => {
    if (currentPage < pageNum.length - 1) {
      onPageChange(currentPage + 1)
    } else {
      onPageChange(pageNum.length)
    }
  }


  const handlePrevious = () => {
    if (currentPage > pageNum[0]) {
      onPageChange(currentPage - 1)
    } else {
      onPageChange(pageNum[0])
    }
  }



  return (

    <div className="pagination">


      <button
        className={currentPage === 1 ? 'disabled' : ''}
        onClick={handlePrevious}
      >
        Previous
      </button>


      {pageNum.map(number => (
        <div
          key={number}
          className={currentPage === number ? 'page active' : 'page'}
          onClick={() => onPageChange(number)}
        >
          {number}
        </div>
      ))}


      <button
        className={currentPage === totalPages ? 'disabled' : ''}
        onClick={handleNext}
      >
        Next
      </button>


    </div>
  )
}

export default Pagination
