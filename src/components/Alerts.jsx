import React from 'react';
import { AlertDialog, Button, Center } from 'native-base';




export const DeleteAlert = ({
  cancelRef,
  isOpen,
  onClose,
  onHandleDelete,
  onCancel,
}) => {
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Warning are you sure?</AlertDialog.Header>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button colorScheme="warning" onPress={onHandleDelete}>
              Delete
            </Button>
            <Button colorScheme="coolGray" onPress={onCancel}>
              Close
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export const CreateAlert = ({
  cancelRef,
  isOpenCreate,
  onCloseCreate,
  onHandleCreate,
  onCancelCreate,
}) => {

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpenCreate}
      onClose={onCloseCreate}>
      <AlertDialog.Content>
        <Center>
          <AlertDialog.Header>Note Created</AlertDialog.Header>
        </Center>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button colorScheme="coolGray" onPress={onCancelCreate}>
              Close
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export const UpdateAlert = ({
  cancelRef,
  isOpenUpdate,
  onCloseUpdate,
  onCancelUpdate,
}) => {
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpenUpdate}
      onClose={onCloseUpdate}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <Center>
        <AlertDialog.Header>Note Updated!</AlertDialog.Header>
        </Center>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button colorScheme="coolGray" onPress={onCancelUpdate}>
              Close
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )

}
