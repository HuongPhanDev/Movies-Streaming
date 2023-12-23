import React, { useEffect, useState } from 'react';
import { fetchGenre, fetchLan } from '../api/Api';
import '../styles/FilterPanel.css';

interface Genre {
  id: number;
  name: string;
}

interface Language {
  iso_639_1: string;
  english_name: string;
}

const FilterPanel: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetchGenre('https://api.themoviedb.org/3/genre/movie/list?api_key=e625e669aa1fa4c29e259bda1eae49a7');
        setGenres(response.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    const fetchLanguages = async () => {
      try {
        const response = await fetchLan('https://api.themoviedb.org/3/configuration/languages?api_key=e625e669aa1fa4c29e259bda1eae49a7');
        setLanguages(response);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchGenres();
    fetchLanguages();
  }, []);

  return (
    <div className="filterPanel">
      <h2>Sort results by</h2>
      <select>
        <option value="">Select an option</option>
        <option value="">Release Date Descending</option>
        <option value="">Rating Ascending</option>
        <option value="">Popularity Ascending</option>
        <option value="">Rating Descending</option>
        <option value="">Popularity Descending</option>
      </select>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h2>Languages</h2>
      <select>
        {languages.map((language) => (
          <option key={language.iso_639_1} value={language.iso_639_1}>
            {language.english_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPanel;
