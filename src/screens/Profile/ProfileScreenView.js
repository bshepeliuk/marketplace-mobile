import React from 'react';
import { Text, View, Button } from 'react-native';
import T from 'prop-types';

function ProfileScreenView({ handleLogout }) {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="logout" onPress={handleLogout} />
    </View>
  );
}

ProfileScreenView.propTypes = {
  handleLogout: T.func,
};

export default ProfileScreenView;
