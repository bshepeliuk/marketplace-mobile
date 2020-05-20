import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import T from 'prop-types';
import GestureRecognizer from 'react-native-swipe-gestures';

import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import s from './styles';
import { globalStyles, colors } from '../../styles';

const gestureHandleConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function SendMessageModalView({
  message,
  setMessage,
  handleSubmit,
  handleSwipeDown,
}) {
  return (
    <SafeAreaContainer>
      <GestureRecognizer
        onSwipeDown={handleSwipeDown}
        config={gestureHandleConfig}
        style={globalStyles.fillAll}
      >
        <View style={s.wrap}>
          <KeyboardAvoidingView style={s.sendView}>
            <TextInput
              placeholder="Message..."
              onChangeText={setMessage}
              value={message}
              style={s.input}
              multiline
            />
            <TouchableOpacity
              onPress={handleSubmit}
              style={s.sendBtn}
            >
              <Text style={s.btnTxt}>Send</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </GestureRecognizer>
    </SafeAreaContainer>
  );
}

SendMessageModalView.navigationOptions = () => ({
  cardStyle: {
    backgroundColor: colors.transparentBlack,
  },
});

SendMessageModalView.propTypes = {
  handleSubmit: T.func,
  setMessage: T.func,
  message: T.string,
  handleSwipeDown: T.func,
};

export default SendMessageModalView;
