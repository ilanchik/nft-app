import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { NFTData } from '../constants'
import { Image, Dimensions } from 'react-native'


const LoginScreen = () => {

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [nftData, setNftData] = useState(NFTData);


    // Create navigation
    const navigation = useNavigation();

    // Add listener to see if anyone is logged in
    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home");
                console.log("Signed in")
            }
        })

        return unsubscribe;   // Will unsubscribe from listener, so to not keep pinging
    }, [])

    // Register with Firebase
    const handleSignUp = () => {

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(`Registered with email: ${user.email}`))
    }

    // Login with Firebase
    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(`Logged in with email: ${user.email}`));
    }

    return (
        <View style={styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='email'
                    value={email}
                    onChangeText={text => setemail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    button: {
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#0782f9",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})