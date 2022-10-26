import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import { styled } from 'nativewind';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

import { products } from '../data/product_data';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView)

const FeaturedRow = ({ id, title, description }) => {
  return (
    <StyledView>
      <StyledView className='mt-4 flex-row items-center justify-between px-4'>
        <StyledText className='font-bold text-lg'>
          {title}
        </StyledText>
        <ArrowRightIcon color="#00CCBB" />
      </StyledView>

      <StyledText className='text-xs text-gray-500 px-4'>{description}</StyledText>

      <StyledScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >

        {/* RestaurantCard */}
        {products && products.map(() => {

        })}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          name="food"
          price="5$"
          rating={4.5}
          genre="japanese"
          address="123 Street"
          short_description="Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
          description="Restaurants specializing in sushi abound in Japan, where subtleties of preparation find a discriminating clientele"
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Street"
          short_description="Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Street"
          short_description="Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Street"
          short_description="Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
          dishes={{}}
          long={20}
          lat={0}
        />
      </StyledScrollView>
    </StyledView>
  )
}

export default FeaturedRow