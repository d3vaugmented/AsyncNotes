import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { COLORS, SIZES, SHADOWS,} from '../constants';
import { Title} from './SubInfo';
import { Center, HStack } from 'native-base';
import TimeNow from './TimeNow';

const NoteCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Center>
      <HStack>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark,
          }}>
          <HStack>
          <View style={{ width: '100%', padding: SIZES.font }}>
              <HStack>
                <Title
                  title={data.title}
                  titleSize={SIZES.large}
                  handlePress={() =>
                    navigation.navigate('NoteDetail', { data })
                  }
                />
              </HStack>
              {data.date ? (
                <TimeNow date={data.date} titleSize={SIZES.medium} />
              ) : null}
          </View>
          </HStack>
        </View>
      </HStack>
    </Center>
  );
};

export default NoteCard;
