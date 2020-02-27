import { useActionSheet } from '@expo/react-native-action-sheet';

import { colors } from '../styles';

export const useSelectPhoto = (onChooseAction) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onOpenActionSheet = () => {
    const options = ['Open camera', 'Open gallery', 'Cancel'];
    const openCameraBtnIndex = 0;
    const openGalleryBtnIndex = 1;
    const cancelBtnIndex = 2;
    const title = 'Which one do you like?';

    const containerStyle = {
      color: colors.white,
    };
    const titleTextStyle = {
      fontSize: 24,
      alignSelf: 'center',
      color: colors.grey,
    };
    const textStyle = {
      fontSize: 20,
      textAlign: 'center',
      color: 'blue',
      width: '100%',
    };
    const separatorStyle = {
      backgroundColor: colors.clouds,
    };

    showActionSheetWithOptions(
      {
        options,
        openCameraBtnIndex,
        openGalleryBtnIndex,
        cancelBtnIndex,
        title,
        showSeparators: true,
        containerStyle,
        titleTextStyle,
        textStyle,
        separatorStyle,
      },
      (btnIndex) => onChooseAction(btnIndex),
    );
  };

  return onOpenActionSheet;
};
