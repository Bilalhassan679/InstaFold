import React from 'react';
import { StyleSheet, View } from 'react-native';
import { hp } from '../theme/responsive';
const Divider = ({dividerStyle}) => {
    return (
        <View
            style={{
                ...dividerStyle,

                // borderBottomColor: 'rgba(0, 0, 0, 0.1);',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
    );
};

export default Divider;