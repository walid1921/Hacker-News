import Source from "./UI/Source";

function News({ displayedData, status }) {


  return (
    <div className="mt-6 h-[50vh]">
      
      {status === 'error' ? (

        <div className="error-container">
          <div className="error-message">
            <p>Something went wrong</p>
          </div>
        </div>


      ) : status === 'success' ? (
        displayedData.map(item => (
          <ul key={item.objectID} >
            <Source title={item.title} url={item.url} />
          </ul>
        ))
      ) : (


        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default News;
