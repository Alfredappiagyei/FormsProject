import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Contacts from './ContactList';
import {  View,   } from 'react-native';


export default function App() {
  return (
    <View>
        <Contacts/>     
    </View>
  );
}

