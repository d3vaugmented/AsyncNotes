import { HStack, Spinner, Heading } from 'native-base';
import React from 'react';
import { View, Image, TextInput, Text } from 'react-native';

import { COLORS, SIZES, assets, FONTS } from '../constants';

const TimeNow = ({ date, titleSize,}) => {
  

  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}>
        {date}
      </Text>
    </View>
  );
};

export default TimeNow;
