import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import T from 'prop-types';

import s from '../styles';
import { colors } from '../../../../styles';

function ChatInput({ onChange, handleSend, value }) {
  return (
    <View style={s.chatInputWrap}>
      <TextInput
        placeholder="Message..."
        onChangeText={onChange}
        onSubmitEditing={handleSend}
        value={value}
        multiline
        style={s.chatInput}
      />
      <TouchableOpacity onPress={handleSend} style={s.sendBtn}>
        <MaterialIcons
          name="send"
          size={30}
          color={colors.primaryGreen}
        />
      </TouchableOpacity>
    </View>
  );
}

ChatInput.propTypes = {
  onChange: T.func,
  handleSend: T.func,
  value: T.string,
};

export default ChatInput;
