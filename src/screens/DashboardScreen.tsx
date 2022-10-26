import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const DashboardScreen = ({ navigation }) => {

  const [data, setData] = useState([]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailedScreen',
          {
            id: item.id,
          }
        )}>
      <View style={styles.alignment}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

    </TouchableOpacity>
  );

  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await resp.json();
    console.log(result);
    setData(result);
  };
  useEffect(() => {
    fetchData();
  },
    []);

  return (
    <View style={styles.root}>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e28743',
  },
  root: {
    flex: 1,
  },
  alignment: {
    alignItems: 'center',
    fontSize: 25,
    borderRadius: 5,
    paddingVertical: 20,
    margin: 5,
    backgroundColor: '#e28743',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default DashboardScreen;
