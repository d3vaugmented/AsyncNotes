import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';

export const NoteContext = createContext();
export const NoteProvider = ({ children }) => {


  const [notes, setNotes] = useState([]);
  const [timeNow, setTimeNow] = useState('');
  const asyncStorageKey = 'listOfNotes';


  const findData = async () => {
    const result = await AsyncStorage.getItem(asyncStorageKey);
    if (result !== null) {
      setNotes(JSON.parse(result));
    }
  };

  const getFormatDate = () => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let newDate = new Date();
    let monthData = newDate.getMonth();
    let Month = months[monthData];
    let Day = newDate.getDate();
    let Year = newDate.getFullYear();
    let Hour = newDate.getHours();
    let Minute = newDate.getMinutes();
    let AMPM = 'AM';
    let HourCheck = parseInt(Hour);

    if (HourCheck > 12) {
      AMPM = 'PM';
      Hour = HourCheck - 12;
    } else if (HourCheck === 0) {
      Hour = '12';
    }

    const addZero = (i) => {
      if (i < 10) { i = '0' + i};
      return i;
    }

    setTimeNow(Month + "-" + Day + "-" + Year + " " + Hour + ":" + addZero(Minute) + " " + AMPM);
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(asyncStorageKey);
      const parsedValue =
        jsonValue !== null ? JSON.parse(jsonValue) : null;

      setNotes(parsedValue);
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    findData();
    getData();
  }, []);

  return (
    <NoteContext.Provider
      value={{
        asyncStorageKey,
        timeNow,
        setTimeNow,
        getFormatDate,
        notes,
        setNotes,
        findData,
        getData,
      }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;
