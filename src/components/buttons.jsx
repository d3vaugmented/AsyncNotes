import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS, SHADOWS, assets, SIZES, FONTS } from '../constants';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Center } from 'native-base';

export const EditButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        opacity: 90,
        backgroundColor: 'transparent',
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 40, height: 40 }}
      />
    </TouchableOpacity>
  );
};

export const DetailButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        opacity: 90,
        backgroundColor: 'transparent',
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 40, height: 40 }}
      />
    </TouchableOpacity>
  );
};

export const DeleteButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        opacity: 90,
        backgroundColor: 'transparent',
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 40, height: 40 }}
      />
    </TouchableOpacity>
  );
};



export const BackButton = ({ goBack }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={assets.left} />
  </TouchableOpacity>
);

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const CircleCoin = ({ imgUrl }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
      }}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24, backgroundColor: COLORS.gray }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  title,
  minWidth,
  fontSize,
  fontColor,
  handlePress,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        opacity: 90,
        backgroundColor: 'transparent',
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        borderColor: COLORS.gray,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: fontColor,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const checkImgButton = ({ imgUrl, handlePress, ...props}) => {
  return  (
    <TouchableOpacity
      style={{
        opacity: 90,
        backgroundColor: 'transparent',
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        borderColor: COLORS.gray,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}>
      <Image
            source={assets.notebook}
            resizeMode="contain"
            style={{width: 50, height: 50, marginRight: SIZES.base}}
          />
    </TouchableOpacity>
  )
}

export const RectSolidButton = ({
  title,
  minWidth,
  fontSize,
  fontColor,
  handlePress,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: '5%',
        backgroundColor: COLORS.blue,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        borderColor: COLORS.gray,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const RectIconButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <Center>
      <TouchableOpacity
        style={{
          opacity: 90,
          backgroundColor: 'transparent',
          padding: SIZES.small,
          borderRadius: SIZES.extraLarge,
          ...props,
        }}
        onPress={handlePress}>
        <Image
          source={assets.unlocked}
          resizeMode="contain"
          style={{ width: 120, height: 120 }}
        />
      </TouchableOpacity>
    </Center>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  container: {
    position: 'absolute',
    top: 5 + getStatusBarHeight(),
    left: 5,
  },
  image: {
    width: 24,
    height: 24,
  },
});
