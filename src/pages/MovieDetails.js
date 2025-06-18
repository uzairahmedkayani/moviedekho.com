import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={styles.container}>
      <img src={movie.posterUrl} alt={movie.title} style={styles.image} />
      <div style={styles.details}>
        <h2>{movie.title}</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Description:</strong> A placeholder description for {movie.title}.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '40px',
    gap: '30px',
  },
  image: {
    width: '300px',
    borderRadius: '10px',
  },
  details: {
    maxWidth: '600px',
  },
};

export default MovieDetails;
