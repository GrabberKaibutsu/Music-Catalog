import React from 'react'
import { Link } from "react-router-dom";

const HomeAlbum = ({albums}) => {
  return (
    <div className="text-slate-50 w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
            {/* Goes over each album in the list to display the top 20 albums */}
            {albums && albums.map((item, index) => {
                return (
                    <li className="flex">
                        {/* link to the show album page that will show more details about the album */}
                        <Link to={`/album/${item?.id}`}>
                            <img src={item?.images[0].url} />
                            <p className="text-slate-50 hover:text-indigo-600">{item?.name}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default HomeAlbum