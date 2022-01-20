import React, { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next'
import prisma from '../lib/prisma';
import { Prisma } from '@prisma/client';
import { useFilter } from '../lib/hooks/useFilter';
import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';

const categoryWithHobbies = Prisma.validator<Prisma.CategoryArgs>()({
    include: { hobbies: true }
});
export type CategoryWithHobbies = Prisma.CategoryGetPayload<typeof categoryWithHobbies>

type Props = {
  categories: CategoryWithHobbies[];
};

const Home: NextPage<Props> = ({ categories }) => {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');
  const [filteredCategories] = useFilter(category, searchValue, categories);

  return (
    <Layout>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} category={category} setCategory={setCategory} />
      <CategoryList categories={filteredCategories} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const categories = await prisma.category.findMany({
    include: {
      hobbies: true
    }
  });
  
  return {
    props: {
      categories
    }
  };
};