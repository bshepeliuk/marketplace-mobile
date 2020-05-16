import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import T from 'prop-types';

import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import { colors } from '../../styles';

function SendMessageModalView({ handleChat }) {
  return (
    <SafeAreaContainer>
      <TextInput
        placeholder="Message..."
        multiline
        style={{ height: 100 }}
      />
      <TouchableOpacity onPress={() => handleChat()}>
        <MaterialIcons
          name="send"
          size={30}
          color={colors.primaryGreen}
        />
      </TouchableOpacity>
    </SafeAreaContainer>
  );
}

SendMessageModalView.navigationOptions = () => {};

SendMessageModalView.propTypes = {
  handleChat: T.func,
};

export default SendMessageModalView;
