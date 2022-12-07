/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { MainBackground as Background, Header, PassCard } from '../components';
import { NoteContext } from '../context/NoteContext';
import { View } from 'react-native';
import { Provider, Portal, FAB } from 'react-native-paper';
import { assets, COLORS } from '../constants';
const Notes = ({ navigation }) => {
  const [notesList, setNotesList] = useState([]);
  const [state, setState] = useState({ open: false });
  const [setValue, onSetValue] = useState();
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const { notes, setNotes, getData } = useContext(NoteContext);

  const handleSearch = value => {
    if (value.length === 0) {
      setNotesList(notes);
      onSetValue(value.length);
    } else if (value.length === value.length - 1) {
      setNotesList(notes);
      onSetValue(value.length);
    }

    const filteredData = notes.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length === 0) {
      setNotesList(filteredData);
    } else {
      setNotes(filteredData);
      console.log(filteredData);
    }
  };

  const onReset = () => {
    if (notesList === notes) {
      return getData();
    } else if (setValue === 0) {
      return getData();
    }
  };

  useEffect(() => {
    onReset();
    console.log(notes);
  }, [notesList, setValue]);

  return (
    <Background>
      <FlatList
        data={notes}
        renderItem={({ item }) => <PassCard data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header handlePress={onReset} onSearch={handleSearch} />
        }
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </Background>
  );
};

export default Notes;
