import React, { useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

const DetailedScreen = ({ route }) => {

    const { id } = route.params;

    const [details, setDetails] = useState([]);

    const getDetail = async () => {

        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const result = await resp.json();
        console.log("Detailed Screen=", result);
        setDetails(result);
    };

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.alignment}>
                    <Text
                        style={{
                            paddingBottom: 10,
                            paddingVertical: 10,
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                            margin: 15
                        }}>
                        {details.id}
                    </Text>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            height: 8
                        }}>
                    </View>
                    <Text
                        style={{
                            paddingBottom: 5,
                            paddingVertical: 10,
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                            margin: 15
                        }}>
                        {details.title}
                    </Text>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            height: 8
                        }}>
                    </View>
                    <Text
                        style={{
                            paddingBottom: 10,
                            paddingVertical: 10,
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                            margin: 15
                        }}>
                        {details.body}
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'center'
    },
    alignment: {
        alignItems: 'center',
        fontSize: 24,
        borderRadius: 5,
        paddingVertical: 10,
        margin: 10,
        padding: 10,
        backgroundColor: '#e28743',
        justifyContent: 'center'
    }
});

export default DetailedScreen;
