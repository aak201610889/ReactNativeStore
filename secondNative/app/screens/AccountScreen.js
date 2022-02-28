import { StyleSheet, Text, View, FlatList } from "react-native";
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
  { title: "My Listings", icon:{name: "format-list-bulleted",backgroundColor: colors.primary} },
  { title: "My Messages", icon:{name: "email",backgroundColor:colors.secondary }},
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="aak"
          subtitle="aak201610889@gmail.com"
          image={require("../assets/aak.png")}
        />
      </View>
      <View style={styles.container}>
       
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem title='Logout' IconComponent={<Icon name='logout' backgroundColor="#ffee6d" />} />
      <ListItemSeparator/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor:colors.light,
  }
});