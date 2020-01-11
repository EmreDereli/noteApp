/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import db, { addNote, dbOpen } from "../Utils/db";
import CustomTextInput from '../components/CustomTextInput';
import NoteContentInput from '../components/NoteContentInput';
import CustomButton from '../components/CustomButton';
import { Typography } from '../styles/Typography';
import Header from '../components/Header';

var TITLE = null;
var NOTE = null;
export default class AddNote extends Component {
  constructor(props) {
    super(props);

  }

  onPressButton = () => {

    addNote(TITLE,NOTE,"11 Ocak 2019");
  }

  getTitle = (val) => {
    TITLE = val;
  }
  getNote = (val) => {
    NOTE = val;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header onPress={() => navigation.navigate("Home")}></Header>
        <CustomTextInput getValue={this.getTitle}></CustomTextInput>
        <NoteContentInput getValue={this.getNote}></NoteContentInput>
        <CustomButton onPress={() => this.onPressButton()}></CustomButton>
      </View>
    );
  }

};

const styles = StyleSheet.create({

});


