import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleAlbumButtonClick = (userId) => {
    setSelectedUserId(userId);
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  };

  const handlePhotosButtonClick = (albumId) => {
    setSelectedAlbumId(albumId);
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumButtonClick(user.id)}>Album</button>
          </li>
        ))}
      </ul>
      {selectedUserId && (
        <>
          <h2>Альбоми користувача</h2>
          <ul>
            {albums.map(album => (
              <li key={album.id}>
                {album.title}
                <button onClick={() => handlePhotosButtonClick(album.id)}>Photos</button>
              </li>
            ))}
          </ul>
        </>
      )}
      {selectedAlbumId && (
        <>
          <h3>Фотографії альбому</h3>
          <ul>
            {photos.map(photo => (
              <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;