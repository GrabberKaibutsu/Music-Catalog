import React, { useEffect, useState } from "react";
import Albums from "../components/Album"

const ViewAlbums = () => {

    const [albums, setAlbums] = useState([]);

    // grabs the top 20 new-released albums from the backend
    useEffect(() => {
        fetch("http://localhost:3001/albums")
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
        })
        .then((jsonRes) => setAlbums(jsonRes));
    }, []);

    // console.log(albums)

  return (
    <div>
        <h1>New Albums</h1>

        {/* albums components that will show the list of the top 20 new-released albums */}
        <Albums albums={albums} />
    </div>
  )
}

export default ViewAlbums