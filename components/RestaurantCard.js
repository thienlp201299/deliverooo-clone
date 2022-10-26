// import libs
import React from 'react';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline';

// declare ... variables
const StyledImage = styled(Image)
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {

  const navigation = useNavigation()

  // on navigate to detail page
  const onNavigate = () => {
    navigation.navigate("Detail", {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    })
  }

  return (
    <StyledTouchableOpacity
      onPress={onNavigate}
      className='bg-white mr-3 shadow'>
      <StyledImage
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-52 rounded-sm'
      />
      <StyledView className='px-3 pb-4'>
        <StyledText className='font-bold text-lg pt-2'>{title}</StyledText>
        <StyledView className='flex-row items-center space-x-1'>
          <StarIcon color="green" opacity={0.5} size={22} />
          <StyledText className='text-xs text-gray-500'>
            <StyledText className='text-green-500'>{rating}</StyledText> . {genre}
          </StyledText>
        </StyledView>

        <StyledView className='flex-row items-center space-x-1'>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <StyledText className='text-xs text-gray-500'>Nearby . {address} </StyledText>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default RestaurantCard