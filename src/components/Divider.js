import React from 'react';
import { StyleSheet, View } from 'react-native';
import { hp } from '../theme/responsive';
const Divider = ({dividerStyle}) => {
    return (
        <View
            style={{
                ...dividerStyle,
                // borderBottomColor: 'rgba(0, 0, 0, 0.2);',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding: 5,
                marginBottom: hp('3.5')
            }}
        />
    );
};

export default Divider;