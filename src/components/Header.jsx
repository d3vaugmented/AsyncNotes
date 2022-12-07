import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { Text, HStack, Center, Heading, VStack } from 'native-base';

import { COLORS, SIZES, assets } from '../constants';

const Header = ({ onSearch, handlePress }) => {
  return (
    <Center paddingTop={'10%'} px={4} flex={1}>
      <VStack space={5} alignItems="center">
      <Image
            source={assets.notebook}
            resizeMode="contain"
            style={{width: 50, height: 50, marginRight: SIZES.base}}
          />
        <Heading size="lg">Async Notes</Heading>

        <HStack space={2} alignItems="center">
          <Text>
            {
              'Push the plus button to create a new note.'
            }
          </Text>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Header;
