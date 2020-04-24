import React from 'react';
import './App.css';
import stravaClubs from './strava-clubs.json';

function App() {
  console.log()
  return (
    <div className="App">
      <div className="clubs">
        {stravaClubs.map((club, i) => (
          <iframe
            className="club"
            key={`url-${i}`}
            title={club.name}
            src={club.url}
            frameBorder='0'
            width='300'
            height='160'
            scrolling='no' />
        ))}
      </div>
      <footer>
        Laget med <span role="img" aria-label="flexed-biceps">💪🏻</span> av <a
          className="footer"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/JonasTriki">
            Jonas Triki
          </a>. Kildekoden finner du på <a
            className="footer"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/JonasTriki/strava-matnat">
              GitHub
          </a>.
      </footer>
    </div>
  );
}

export default App;
