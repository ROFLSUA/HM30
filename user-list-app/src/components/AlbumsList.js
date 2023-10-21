import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function AlbumsList() {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Albums List</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/user/${id}/albums/${album.id}`}>
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumsList;
