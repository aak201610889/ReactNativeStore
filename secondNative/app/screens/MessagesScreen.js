import { StyleSheet} from 'react-native'
import React, { useState} from 'react'
import { FlatList, View, Text } from "react-native-web";
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

// console.log('constant',Constants);
const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image:require('../assets/3.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image:require('../assets/4.jpg')
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image:require('../assets/5.jpg')
  },
]

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => { 
    //Delete the message from the list
    setMessages(messages.filter(m => m.id !==message.id));
    //call the server
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("message selected", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        
        onRefresh={() => { 
          setMessages([
            {
              id: 4,
              title: 'd44',
              description: "d33",
              image:require('../assets/6.jpg')
            }
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})