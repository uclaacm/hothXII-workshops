import { useState } from 'react'
import './App.css'

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [results, setResults] = useState([]);

  const authenticateSpotify = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET
        })
      });

      if (response.status === 200) {
        const responseJSON = await response.json();
        if (responseJSON) {
          setAccessToken(responseJSON.access_token);
        }
      } else {
        console.error('HTTP error! Status ' + response.status);
      }
    } catch (error) {
      console.error('Error with Spotify authentication:', error);
    }
  };

  const spotifySearch = async (event) => {
    event.preventDefault();
  
    const query = event.target.query.value;
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&market=US`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + accessToken
        }
      });

      if (response.status === 200) {
        const responseJSON = await response.json();
        if (responseJSON) {
          setResults(responseJSON.tracks.items);
        }
      } else {
        console.error('HTTP error! Status ' + response.status);
      }
    } catch (error) {
      console.error('Error with Spotify authentication:', error);
    }
  };

  return (
    <>
      <h1>Spotify Web API Demo</h1>
      <button onClick={authenticateSpotify}>Authenticate</button>

      { accessToken && 
        <form onSubmit={spotifySearch}>
          <input placeholder='Enter a Spotify song' name='query'></input>
          <button type='submit'>Search</button>
        </form>
      }

      <div className='trackResults'>
        {results.map((track) => (
          <div key={track.id} className="track">
            <p>{track.name}</p>
            <p>by {track.artists.map((artist) => artist.name).join(", ")}</p>
            <a href={track.external_urls.spotify} target="_blank">Open on Spotify</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default App