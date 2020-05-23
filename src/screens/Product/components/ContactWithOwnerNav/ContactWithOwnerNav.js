import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import T from 'prop-types';

import s from '../../styles';

function ContactWithOwnerNav({
  owner,
  handleDialCall,
  navigateToSendMessage,
}) {
  return (
    <View style={s.navBtnWrap}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => handleDialCall(owner.phone)}
        style={s.callBtn}
      >
        <Text style={s.btnTxt}>Call</Text>
        <View style={s.afterCircle} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigateToSendMessage()}
        style={s.sendMsgBtn}
      >
        <Text style={s.btnTxt}>Message</Text>
        <View style={s.beforeCircle} />
      </TouchableOpacity>
    </View>
  );
}

ContactWithOwnerNav.propTypes = {
  handleDialCall: T.func,
  owner: T.shape({
    fullName: T.string,
    phone: T.string,
  }),
  navigateToSendMessage: T.func,
};

export default ContactWithOwnerNav;
