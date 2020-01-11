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
    FlatList,
    View,
    Text,
    StatusBar,
    Platform,
    Button,
} from 'react-native';
import NoteCard from "../components/NoteCard";

import DateView from '../components/DateView';
import AddNoteButton from '../components/AddNoteButton';
import CustomTextInput from '../components/CustomTextInput';
import NoteContentInput from '../components/NoteContentInput';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SQLite from 'react-native-sqlite-storage';
import { Colors } from '../styles/Colors';
import { Typography } from '../styles/Typography';
import { deleteNote, getNotes } from '../Utils/db';
var db = SQLite.openDatabase({
    name: 'noteAppdb',
    location: 'default',
    createFromLocation: '~www/noteAppdb.db',
},
    () => {
        console.log("Başarılı")
    },
    error => {
        console.log(error);
    }


);
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {

            users: []
        }
        this.getNote();

    }


    getNote = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM notes', null, (tx, results) => {
                const rows = results.rows;

                let users = [];

                for (let i = 0; i < rows.length; i++) {
                    users.push({
                        ...rows.item(i),
                    });

                }

                this.setState({ users });
                console.log(this.state.users);
            });
        });
    }


    onPressButton = (id) => {

        deleteNote(id);
        this.getNote();
    }

    onPressNote = (id,title,note) => {
        this.props.navigation.navigate('EditNote',{id: id, title:title, note:note});
    }

    render() {
        const { users } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ParallaxScrollView
                    backgroundColor={Colors.dotColor4}
                    contentBackgroundColor="white"
                    parallaxHeaderHeight={200}
                    stickyHeaderHeight={50}
                    renderForeground={() => (
                        <DateView count={users.length > 0 ? users.length : 0}></DateView>
                    )}
                    renderStickyHeader={() => (
                        <View style={{ alignItems: 'center', margin: 15 }}>
                            <Text style={[Typography.Title, { color: 'white' }]}>Tüm Notlarım</Text>
                        </View>
                    )}>
                    <View style={{ marginTop: 30, height: 500 }}>
                        {users.length > 0 ? (<FlatList
                            data={users}
                            numColumns={2}
                            keyExtractor={(item, index) => item.id}
                            renderItem={(item) => <NoteCard onPress={()=> this.onPressNote(item.item.id,item.item.title,item.item.note)} id={item.item.id} onPressDelete={() => this.onPressButton(item.item.id)} title={item.item.title} note={item.item.note} date={item.item.date}></NoteCard>}
                        />) : null}

                    </View>

                </ParallaxScrollView>
                <AddNoteButton onPress={() => this.props.navigation.navigate("AddNote")}></AddNoteButton>

            </View>

        );
    }

};

const styles = StyleSheet.create({


});


