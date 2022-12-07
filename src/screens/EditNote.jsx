/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { Center, Text, Flex, AlertDialog, Button, Spinner } from 'native-base';
import { BackButton, DeleteButton, RectButton } from '../components/buttons';
import { assets, COLORS, SIZES } from '../constants';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/NoteContext';
import { EditForm, UpdateAlert } from '../components';

const EditNote = ({ route, navigation }) => {
  const { data } = route.params;
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const { notes, setNotes, timeNow, getFormatDate, asyncStorageKey } = useNotes();

  const updateNote = async (editNote) => {
    const result = await AsyncStorage.getItem(asyncStorageKey);
    let listOfNotes = notes;
    if (result !== null) {
      listOfNotes = JSON.parse(result);
    }

    listOfNotes.filter(note => {
      if (note.id === data.id) {
        note.id = data.id;
        note.title = editNote.title;
        note.description = editNote.description;
        note.date = timeNow
        setIsOpenUpdate(true);

      }

      return note;
    });
    setNotes(listOfNotes);
    await AsyncStorage.setItem(asyncStorageKey, JSON.stringify(listOfNotes));

  };

  const onCancelUpdate = () => {
    const navToHome = () =>
      navigation.navigate('Root', { screen: 'TabTwo' });
    onCloseUpdate();
    navToHome();
  };
  const onCloseUpdate = () => setIsOpenUpdate(false);

  const cancelRef = React.useRef(null);

  const { control, setFocus, handleSubmit } = useForm();
  useEffect(() => {
    getFormatDate();
  });
  return (
    <Flex h={'80%'}>
      <BackButton
        goBack={() => navigation.navigate('Root', { screen: 'Home' })}
      />

      <Center paddingTop={'10%'} px={4} flex={1}>
        <Text>Update note</Text>
        <Text>{'Update your note and other information here.'}</Text>
      </Center>

      <>
        {loading && (
          <Spinner color="blue.500" size="lg" accessibilityLabel="Loading..." />
        )}

        {!loading && (
          <EditForm control={control} setFocus={setFocus} data={data} />
        )}
        <Center>
          <RectButton
            fontColor={COLORS.black}
            fontSize={SIZES.large}
            title={'Update'}
            handlePress={handleSubmit(data => {
              setIsLoading(true);
              const updatedNote = {
                id: data.id,
                title: data.title,
                description: data.description,
                date: timeNow,
              };
              updateNote(updatedNote);
            })}
          />

        </Center>
        <UpdateAlert cancelRef={cancelRef} isOpenUpdate={isOpenUpdate} onCloseUpdate={onCloseUpdate} onCancelUpdate={onCancelUpdate} />
      </>
    </Flex>
  );
};

export default EditNote;
