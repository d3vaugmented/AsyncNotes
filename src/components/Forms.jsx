import React from 'react';
import { Box, Center, Heading, VStack } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { COLORS } from '../constants';

export const UserNoteForm = ({
  isSwitchOn,
  control,
  setFocus,
}) => {

  return (
    <>

      <Center w="100%">
        <Center paddingTop={'10%'} px={4} flex={1}>
          <Text>Add note</Text>
        </Center>
        <Box safeArea p="2" py="40" w="90%" maxW="290">
          <Center>

            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }}>
              Add
            </Heading>
            <Heading mt="1" _dark={{
              color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
              Add new note here!
            </Heading>
          </Center>


          <VStack space={3} mt="5">
            <FormBuilder
              control={control}
              setFocus={setFocus}
              formConfigArray={[
                {
                  type: 'text',
                  name: 'title',

                  rules: {
                    required: {
                      value: true,
                      message: 'Title is required',
                    },
                  },
                  textInputProps: {
                    label: 'Title',
                    activeOutlineColor: COLORS.black,
                    underlineColor: COLORS.black,
                    style: {
                      color: COLORS.black,
                    },
                  },  
                },
                {
                  type: 'text',
                  name: 'description',

                  rules: {
                    required: {
                      value: true,
                      message: 'Description is required',
                    },
                  },
                  textInputProps: {
                    label: 'Description',
                    activeOutlineColor: COLORS.black,
                    underlineColor: COLORS.black,
                    style: {
                      color: COLORS.black,
                    },
                    multiline: true,
                    numberOfLines: 6
                  },
                  
                },
              ]}
            />
          </VStack>
        </Box>
      </Center>
    </>
  );
};


export const EditForm = ({ control, setFocus, data }) => {
  return (
    <Center w="100%">
        <Center paddingTop={'10%'} px={4} flex={1}>
          <Text>Add note</Text>
        </Center>
        <Box safeArea p="2" py="40" w="90%" maxW="290">
          <Center>

            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }}>
              Edit
            </Heading>
            <Heading mt="1" _dark={{
              color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
              {data.title}
            </Heading>
          </Center>


          <VStack space={3} mt="5">
            <FormBuilder
              control={control}
              setFocus={setFocus}
              formConfigArray={[
                {
                  type: 'text',
                  name: 'title',
                  defaultValue: `${data.title}`,

                  rules: {
                    required: {
                      value: true,
                      message: 'Title is required',
                    },
                  },
                  textInputProps: {
                    label: 'Title',
                    activeOutlineColor: COLORS.black,
                    underlineColor: COLORS.black,
                    style: {
                      color: COLORS.black,
                    },
                  },  
                },
                {
                  type: 'text',
                  name: 'description',
                  defaultValue: `${data.description}`,

                  rules: {
                    required: {
                      value: true,
                      message: 'Description is required',
                    },
                  },
                  textInputProps: {
                    label: 'Description',
                    activeOutlineColor: COLORS.black,
                    underlineColor: COLORS.black,
                    style: {
                      color: COLORS.black,
                    },
                    multiline: true,
                    numberOfLines: 6
                  },
                  
                },
              ]}
            />
          </VStack>
        </Box>
      </Center>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    marginTop: '20%',
  },
});
