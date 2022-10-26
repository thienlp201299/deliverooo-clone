import React from 'react';
import { ScrollView } from 'react-native';

import { styled } from "nativewind";

import CategoryCard from './CategoryCard';

const StyledScrollView = styled(ScrollView);

const Categories = () => {
  return (
    <StyledScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {/* CategoryCard */}

      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1" />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1" />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1" />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1" />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1" />
    </StyledScrollView>
  );
}

export default Categories
