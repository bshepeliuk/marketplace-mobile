import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import s from './styles';
import { colors } from '../../../../styles';
import { useSelectPhoto } from '../../../../hooks/useSelectPhoto';
import { ProductFormContext } from '../../../../context';

function LoadPhotosSection() {
  const { isImageLoading, onChooseAction, values } = useContext(
    ProductFormContext,
  );

  const onOpenActionSheet = useSelectPhoto(onChooseAction);
  return (
    <View style={s.loadPhotosWrap}>
      <TouchableOpacity
        style={s.addPhotoBtn}
        disabled={isImageLoading}
        onPress={() => onOpenActionSheet()}
      >
        {isImageLoading ? (
          <ActivityIndicator
            size="small"
            color={colors.primaryGreen}
          />
        ) : (
          <Text style={s.addBtnTxt}>+</Text>
        )}
      </TouchableOpacity>

      {values.photos.length > 0 &&
        values.photos.map((uri) => (
          <Image key={uri} style={s.loadedImg} source={{ uri }} />
        ))}
    </View>
  );
}

export default LoadPhotosSection;
