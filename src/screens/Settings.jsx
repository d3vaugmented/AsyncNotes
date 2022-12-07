import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Center, AlertDialog } from 'native-base';
import { BackButton, MainBackground as Background } from '../components';
import { Card, IconButton, useTheme } from 'react-native-paper';

import { assets, COLORS } from '../constants';

import { useNavigation } from '@react-navigation/core';

const Settings = ({ navigation }) => {
  navigation = useNavigation();
  const { colors } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onReset = async () => {
    await AsyncStorage.clear();
    onClose();
  };
  const onCancel = () => {
    onClose();
  };
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  useEffect(() => { }, []);

  const toggleOnOff = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <>
      <Center>
        <ScrollView>
          <View style={{ width: '100%', marginTop: '20%' }}>
            <Card style={styles.card}>
              <Card.Title
                title="Reset"
                right={props => (
                  <IconButton
                    {...props}
                    icon={assets.reset}
                    onPress={() => {
                      setIsOpen(true);
                    }}
                  />
                )}
              />
              <Card.Content>
                <Text>
                  Warning! Removes all of your notes from your personal
                  database.
                </Text>
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Title
                title="About"
                right={props => (
                  <IconButton
                    {...props}
                    icon={assets.moreInfo}
                    onPress={toggleOnOff}
                  />
                )}
              />
              {!toggle && (
                <Card.Content>
                 
                  <Text
                    style={{ color: COLORS.blue }}
                    onPress={() =>
                      Linking.openURL(
                        'https://imoceo.com',
                      )
                    }>
                    https://imoceo.com
                  </Text>

                  <Card.Title title="Purpose" />
                  <Text>
                    Using My Programming Design Principles developing projects have become a reality!.

                  </Text>
                </Card.Content>
              )}
            </Card>
          </View>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Warning! Are you sure?</AlertDialog.Header>
              <AlertDialog.Content>
                <Text>Restart app after the reset to see results.</Text>
              </AlertDialog.Content>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button colorScheme="lightBlue" onPress={onReset}>
                    Reset
                  </Button>
                  <Button colorScheme="coolGray" onPress={onCancel}>
                    Close
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </ScrollView>
      </Center>
      </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(10, 80, 200, 0.2)',
    marginTop: '20%',
  },
});

export default memo(Settings);
