import React, { memo } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { assets, COLORS } from '../constants';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../../types';


const MainBackground = ({
  navigation,
  children,
  position,
  noMenu,
  skipHeader,
}) => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  navigation = useNavigation();
  const onSettings = () => {
    navigation.navigate('Settings');
  };
  const createNote = () => {
    navigation.navigate('AddNote');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}>
      <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
      {!noMenu && (
        <Provider>
          <Portal>
            <FAB.Group
              visible
              open={open}
              icon={open ? assets.close : assets.plus}
              fabStyle={{ backgroundColor: COLORS.blue, marginBottom: '15%' }}
              actions={[
                {
                  icon: assets.plus,
                  label: 'Add',
                  onPress: () => createNote(),
                  small: true,
                },
                {
                  icon: assets.cog,
                  label: 'Settings',
                  onPress: () => onSettings(),
                  small: true,
                },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
        </Provider>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
  },
  skipHeader: { paddingTop: 300 },
});

export default memo(MainBackground);
