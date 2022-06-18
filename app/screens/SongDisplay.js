import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaViewBase,
  Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import songs from '../model/Data';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const SongDisplay = () => {
  
  
  const { user, logout } = useContext(AuthContext);
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
  
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default SongDisplay;

