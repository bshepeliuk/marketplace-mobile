import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  FlatList,
} from 'react-native';
import T from 'prop-types';

import s from './styles';

function ChooseLocationScreenView({
  submitEditing,
  items,
  text,
  onChange,
  onSelectLocation,
  clearSavedLocations,
}) {
  return (
    <View>
      <TextInput
        style={s.input}
        onChangeText={onChange}
        onSubmitEditing={submitEditing}
        value={text}
      />
      <Button
        style={s.btnClear}
        title="clear"
        onPress={clearSavedLocations}
      />

      {items.length > 0 && (
        <FlatList
          data={items}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => onSelectLocation(item)}
                style={s.chooseLocationBtn}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

ChooseLocationScreenView.navigationOptions = {
  title: 'Location',
};

ChooseLocationScreenView.propTypes = {
  text: T.string,
  submitEditing: T.func,
  items: T.arrayOf(T.string),
  onChange: T.func,
  onSelectLocation: T.func,
  clearSavedLocations: T.func,
};

export default ChooseLocationScreenView;
