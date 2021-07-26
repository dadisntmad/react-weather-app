import React from 'react';
import {useDispatch} from 'react-redux';
import {setCurrentCity} from '../../redux/actions/weather';
import './index.scss';

type SearchBarProps = {
  currentCity: string
  search: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = ({currentCity, search}) => {
  const dispatch = useDispatch();

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
