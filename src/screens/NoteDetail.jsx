import React, { useContext, useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import {
    BackButton,
    DeleteButton,
    EditButton,
    NoteDetailDesc,
    SubInfo,
    DeleteAlert
} from "../components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/NoteContext';
import { HStack } from 'native-base';


const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: "100%", height: '20%' }}>


    </View>
);

const NoteDetail = ({ route, navigation }) => {
    const { data } = route.params;

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const onCancel = () => {
        setIsLoading(false);
        onClose();
    };
    const onClose = () => setIsOpen(false);
    const { notes, setNotes, timeNow, asyncStorageKey } = useNotes();
    const cancelRef = React.useRef(null);

    const navToHome = () => {
        navigation.navigate('Root');
    }

    const navToEdit = () => {
        navigation.navigate('EditNote', { data });
    }

    const deleteNotePrompt = () => {
        setIsOpen(true);
    }
    const removeNote = async () => {
        setIsLoading(true);
        const result = await AsyncStorage.getItem(asyncStorageKey);
        let listOfNotes = notes;
        if (result !== null) {
            console.log(result);
            console.log('removed!');
            const editNotes = listOfNotes.filter(n => n.id !== data.id);
            setNotes(editNotes);
            await AsyncStorage.setItem(asyncStorageKey, JSON.stringify(editNotes));
            setIsOpen(false);
            navigation.navigate('Root', { screen: 'TabTwo' });
        } else {
            console.log('error');
        }
    };
    const onHandleDelete = () => {

        removeNote();
        onClose();

    };


    return (
        <>
            <BackButton
                goBack={() => navigation.navigate('Root', { screen: 'Home' })}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        width: "100%",
                        position: "absolute",
                        bottom: 0,
                        paddingVertical: SIZES.font,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(255,255,255,0.5)",
                        zIndex: 1,
                    }}
                >
                </View>
                <DetailsHeader data={data} navigation={navigation} />
                <View style={{ padding: SIZES.font }}>
                    <SubInfo />
                    <NoteDetailDesc data={data} />

                    <HStack>
                        <EditButton imgUrl={assets.edit} handlePress={navToEdit} />
                        <DeleteButton imgUrl={assets.remove} handlePress={deleteNotePrompt} />
                        <DeleteAlert
                            cancelRef={cancelRef}
                            isOpen={isOpen}
                            onClose={onClose}
                            onHandleDelete={onHandleDelete}
                            onCancel={onCancel}
                        />
                    </HStack>
                </View>
            </SafeAreaView>
        </>
    );
};

export default NoteDetail;
