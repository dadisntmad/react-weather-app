import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../../redux/actions/weather';
import './index.scss';

const SearchBar = ({ currentCity, search }) => {
  const dispatch = useDispatch();

  const onCityChange = e => {
    dispatch(setCurrentCity(e.target.value));
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="City name"
        value={currentCity}
        onChange={onCityChange}
        onKeyPress={search}
      />
    </form>
  );
};

export default SearchBar;
