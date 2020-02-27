import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import s from './styles';
import { ProductFormContext } from '../../../../contexts';

function SegmentedControlPriceTab() {
  const { onChoosePrice } = useContext(ProductFormContext);
  const priceTabValue = 'price';
  const freeTabValue = 'free';

  const [activeTab, setActiveTab] = useState(priceTabValue);

  const handleTab = (tabValue) => {
    setActiveTab(tabValue);
    onChoosePrice(tabValue);
  };

  const priceTabActive =
    activeTab === priceTabValue ? s.activeTab : s.unactiveTab;
  const freeTabActive =
    activeTab === freeTabValue ? s.activeTab : s.unactiveTab;
  const priceTabTxt =
    activeTab === priceTabValue ? s.activeTabTxt : s.unactiveTabTxt;
  const freeTabTxt =
    activeTab === freeTabValue ? s.activeTabTxt : s.unactiveTabTxt;

  return (
    <View style={s.segmentBtnWrap}>
      <TouchableOpacity
        style={[s.segmentBtn, s.leftSegment, priceTabActive]}
        onPress={() => handleTab(priceTabValue)}
        activeOpacity={0.9}
      >
        <Text style={priceTabTxt}>Price</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.segmentBtn, s.rightSegment, freeTabActive]}
        onPress={(evt) => handleTab(freeTabValue, evt)}
        activeOpacity={0.9}
      >
        <Text style={freeTabTxt}>Free</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SegmentedControlPriceTab;
