/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome5';
import { Shadows } from '../styles/Effects';
import { Typography } from '../styles/Typography';
import { months } from '../Utils/Months';
import Size from '../Utils/Size';



var m = months;

const NoteCard: () => React$Node = (props) => {

    var day = new Date().getDate();
    var mon = new Date().getMonth();
    var month = m[mon];

    return (
        <>
            <View style={[styles.noteStyle,Shadows.Shadow1 ]}>
                <View style={styles.titleView}>
                    <View style={{ position: 'absolute', left: 10, top: 10, width: 7, height: 7, borderRadius: 7 / 2, backgroundColor: 'blue' }}></View>
                    <Text style={Typography.Title}>{props.title}</Text>
                </View>
                <View style={{ flex: 8, margin: 10 }}>
                    <Text style={[Typography.Content, { textAlign: 'auto' }]}>{props.note}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 20 }}>
                    <Text style={Typography.Date}>{props.date}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
                        <TouchableOpacity style={{marginHorizontal:5}} onPress={props.onPressDelete}>
                            <Icons name="trash" solid size={16} color="#000"></Icons>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{marginHorizontal:5}}>
                            <Icons name="pencil-alt" size={16}></Icons>
                        </TouchableOpacity> */}

                    </View>

                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    noteStyle: {
        margin: 10,
        backgroundColor: 'white',
        width: (Size.Size.WIDTH - 40) / 2,

        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,

    },
    titleView: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NoteCard;
