import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LoginScreen");
            })
            .catch((error) => alert(error.message));
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <TouchableOpacity
                style={{ borderRadius: 5 }}
                onPress={handleSignOut} >
                <Text style={{ margin: 5, fontSize: 32, color: 'pink' }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create({})