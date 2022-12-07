import { HStack, Spinner, Heading } from 'native-base';
import React from 'react';
import { View, Image, TextInput } from 'react-native';

import { COLORS, SIZES, assets } from '../constants';

const Loader = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

export default Loader;
