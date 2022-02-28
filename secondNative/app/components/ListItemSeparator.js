import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';
export default function ListItemSeparator() {
  return <View style={styles.sperator} />;
}

const styles = StyleSheet.create({
  sperator: {
    width: "100%",
    height: 2,
    backgroundColor:colors.light ,
  },
});