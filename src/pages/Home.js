import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../data/movies';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search movies by title or genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.container}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  input: {
    width: '300px',
    padding: '10px',
    fontSize: '16px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default Home;
