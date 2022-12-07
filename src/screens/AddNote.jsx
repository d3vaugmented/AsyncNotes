import React, { useContext, useState, useEffect } from 'react';
import { Flex, Spinner, Center } from 'native-base';
import { BackButton, RectButton } from '../components/buttons';
import { COLORS, SIZES } from '../constants';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NoteContext } from '../context/NoteContext';
import { UserNoteForm, CreateAlert } from '../components';
const AddNote = ({ navigation }) => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [show, setShow] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [createNow, setCreateNow] = useState(false);
  const { notes, asyncStorageKey, setNotes, getFormatDate, timeNow } = useContext(NoteContext);
  const { setFocus, control, handleSubmit } = useForm();

  const onCancelCreate = () => {
    setIsLoading(false);
    onCloseCreate();
    navigation.navigate('Root');
  };
const onCloseCreate = () => setIsOpenCreate(false);

const addNote = async (data) => {
  setIsLoading(true);
  const ID = Math.floor(Math.random() * 10000).toString();
  const newNote = {
    id: ID,
    title: data.title,
    description: data.description,
    date: timeNow,
    ifEdited: false,
  };

  let notesData;
  if (notes === null) {
    notesData = [];
  } else {
    notesData = notes;
  }

  let newNotes = [...notesData, newNote];
  console.log(newNotes);
  setNotes(newNotes);
  await AsyncStorage.setItem(
    asyncStorageKey,
    JSON.stringify(newNotes),
  );
  setIsOpenCreate(true);
}

const onHandleCreate = () => {
  setCreateNow(true);
  onCloseCreate();
}

const cancelRef = React.useRef(null);
useEffect(() => { getFormatDate() }, [notes]);
return (
  <Flex h={'80%'}>
    <BackButton
      goBack={() => navigation.navigate('Root', { screen: 'TabOne' })}
    />
    {!loading && (
      <UserNoteForm
        isSwitchOn={isSwitchOn}
        setFocus={setFocus}
        control={control}
      />
    )}

    <RectButton
      fontColor={COLORS.black}
      fontSize={SIZES.large}
      title={'Save'}
      handlePress={handleSubmit((data) => {
          addNote(data);

      })}
    />
    <Center>{loading && <Spinner accessibilityLabel="Loading..." />}</Center>

    <CreateAlert cancelRef={cancelRef} isOpenCreate={isOpenCreate} onCancelCreate={onCancelCreate} onHandleCreate={onHandleCreate} onClose={onCancelCreate} />
  </Flex>
);
};

export default AddNote;
