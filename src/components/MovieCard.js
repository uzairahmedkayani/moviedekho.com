import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={styles.card}>
        <img src={movie.posterUrl} alt={movie.title} style={styles.image} />
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <p>{movie.year}</p>
      </div>
    </Link>
  );
};

const styles = {
  card: {
    width: '200px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
};

export default MovieCard;
