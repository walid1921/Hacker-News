import { BiLinkAlt } from 'react-icons/bi';

function Source({ title, url }) {
  return (
    <li className="flex items-center gap-3 mb-3   ">
      <p>{title}  </p>
      <a className='hover:text-orange-500 cursor-pointer' href={url}><BiLinkAlt size={20} /></a>

    </li>
  )
}

export default Source
