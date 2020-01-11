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

import db, { addNote, dbOpen, updateNote } from "../Utils/db";
import CustomTextInput from '../components/CustomTextInput';
import NoteContentInput from '../components/NoteContentInput';
import CustomButton from '../components/CustomButton';
import { Typography } from '../styles/Typography';
import Header from '../components/Header';

var ID = null;
var TITLE = null;
var NOTE = null;

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    ID = this.props.navigation.getParam('id', "boş");
    TITLE = this.props.navigation.getParam('title', "boş");
    NOTE = this.props.navigation.getParam('note', "boş");
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

  onPressSave = () => {
    updateNote(TITLE,NOTE,ID);
    this.props.navigation.navigate("HomeScreen");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header onPressSave={() => this.onPressSave()}></Header>
        <CustomTextInput value={TITLE} getValue={this.getTitle}></CustomTextInput>
        <NoteContentInput value={NOTE} getValue={this.getNote}></NoteContentInput>
        <CustomButton onPress={() => this.onPressButton()}></CustomButton>
      </View>
    );
  }

};

const styles = StyleSheet.create({

});


