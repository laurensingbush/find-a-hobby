import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from '../components/Head';
import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');
 
  return (
    <div className='home'>
      <Head />
      <Layout>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} category={category} setCategory={setCategory} />
        <CategoryList searchValue={searchValue} categoryValue={category} />
      </Layout>
    </div>
  );
};

export default Home;