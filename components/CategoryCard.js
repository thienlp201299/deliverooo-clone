import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity)

const CategoryCard = ({ imgUrl, title }) => {
	return (
		<StyledTouchableOpacity className='relative mr-2'>
			<StyledImage
				source={{ uri: imgUrl }}
				className='h-20 w-20 rounded'
			/>
			<StyledText className=' absolute bottom-1 left-1 text-white font-bold '>{title}</StyledText>
		</StyledTouchableOpacity>
	);
};


export default CategoryCard