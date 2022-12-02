import React from 'react';
import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    isLoading,
    city,
    searchProvince,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    provinceOptions,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className='form '>
        <div className='cont'>
          <h4>Wyszukiwarka</h4>
          <div className='form-center'>
            <FormRow
              type='text'
              name='city'
              value={city}
              labelText={'Miasto'}
              handleChange={handleSearch}
            />
            <FormRowSelect
              labelText={'Województwo'}
              name='searchProvince'
              value={searchProvince}
              handleChange={handleSearch}
              list={['Wszystkie', ...provinceOptions]}
            />
            <FormRowSelect
              labelText={'Sortuj'}
              name='sort'
              value={sort}
              handleChange={handleSearch}
              list={sortOptions}
            />
            <div className='visible'></div>
            <button
              className='btn btn-block btn-danger'
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Wyczyść
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
