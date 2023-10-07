import { useState } from "react";

function Navbar({ handleSearchItems }) {
  const [value, setValue] = useState('');

  const handleValue = (e) => {
    e.preventDefault();

    if (!value) return;


    handleSearchItems(value)
    console.log(value)

    setValue('')

  }

  const handleChange = (e) => {
    setValue(e.target.value)

  }

  return (
    <nav className="flex items-center justify-between w-full bg-color h-14 px-5">
      <span className="font-bold text-lg">
        <a href="/">Hacker News</a>
      </span>

      <ul className="flex">
        <div className="flex ">
          <li className="mr-3 border-r-2 pr-3"><a href="#">new</a></li>
          <li className="mr-3 border-r-2 pr-3"><a href="#">past</a></li>
          <li className="mr-3 border-r-2 pr-3"><a href="#">ask</a></li>
          <li className="mr-3 border-r-2 pr-3"><a href="#">show</a></li>
          <li className="mr-3 border-r-2 pr-3"><a href="#">jobs</a></li>
          <li className="mr-3 border-r-2 pr-3"><a href="#">submit</a></li>
        </div>


      </ul>

      <form className="flex gap-3" onSubmit={handleValue}>
        <input type="text" placeholder="Search something.." className='border bg-slate-100 px-2 rounded-md' value={value} onChange={handleChange} />
        <button>Search</button>
      </form>

      <a href="#">login</a>
    </nav>
  )
}

export default Navbar
