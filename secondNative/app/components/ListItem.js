import { StyleSheet, Text, View, Image, TouchableHighlightBase } from "react-native";
import React from 'react'
import colors from "../config/colors";
import { TouchableHighlight, TouchableOpacity } from "react-native-web";
import Swipeable from "react-native-gesture-handler/Swipeable";
export default function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={ styles.detailes}>
            <Text style={styles.title}>{title}</Text>
            { subtitle &&<Text style={styles.subTitle}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.white,
  },
  detailes: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
   
    borderWidth: 5,
    borderColor: colors.primary
  },
  subTitle: {
    color:colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});