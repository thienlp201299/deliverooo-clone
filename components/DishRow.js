import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';


import { styled } from 'nativewind';

const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const DishRow = (product) => {

  const { name, description, price, img } = product;

  return (
    <StyledTouchableOpacity className='bg-white border p-4 border-gray-200'>
      <StyledView className='flex-row'>
        <StyledView className='flex-1 pr-2'>
          <StyledText className='text-lg mb-1'> {name} </StyledText>
          <StyledText className='text-gray-300'> {description} </StyledText>
          <StyledText className='text-gray-400 mt-2'> {price} </StyledText>
        </StyledView>


        <StyledView>
          <StyledImage
            source={{
              uri: img
            }}
            className='h-20 w-20 bg-gray-300 p-4'
          />
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default DishRow