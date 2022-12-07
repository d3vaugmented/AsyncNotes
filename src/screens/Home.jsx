import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { MainBackground as Background, Header, NoteCard } from '../components';
import { NoteContext } from '../context/NoteContext';

const Home = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false });
  const [notesList, setNotesList] = useState([]);
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
  }, [notesList, setValue]);

  return (
    <Background>
            <FlatList
              data={notes}
              renderItem={({ item }) => <NoteCard data={item} />}
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

export default Home;
