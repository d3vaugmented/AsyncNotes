import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants';

export const Title = ({ title, titleSize, handlePress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          opacity: 90,
          backgroundColor: 'transparent',
          padding: SIZES.small,
          borderRadius: SIZES.extraLarge,
        }}
        onPress={handlePress}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: titleSize,
            color: COLORS.blue,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const Email = ({ title, titleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}>
        {title}
      </Text>
    </View>
  );
};

export const Date = ({ date, titleSize }) => {
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

export const Price = ({ reward }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={assets.info}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>
        {reward} GOL
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
{
  /** To add who joined
export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

*/
}

export const SubInfo = ({ timeLimit }) => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    />
  );
};
