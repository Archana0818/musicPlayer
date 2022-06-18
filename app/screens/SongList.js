import { View, Text,Button,Alert } from 'react-native'
import React , {useState , useContext }  from 'react'
import storage from '@react-native-firebase/storage';
/*import TrackPlayer, {
  Capability, 
  Event, 
  RepeatMode, 
  State, 
  usePlaybackState, 
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';*/


import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const SongList = () => {

  const { user, logout } = useContext(AuthContext);



  const listAll = (reference, pageToken) => {

       return  reference.list({ pageToken }).then(result => {
      // Loop over each item
      result.items.forEach(ref => {

        console.log(ref.name);
        
      });
   
      if (result.nextPageToken) {
        return listFilesAndDirectories(reference, result.nextPageToken);
      }

      return Promise.resolve();
    });
  };



  const reference = storage().ref('/music');

    
  return (
    <View>
      <Button  title= "List" onPress={() => listAll(reference)}/>

      <FormButton buttonTitle='Logout' onPress={() => logout()} />
    </View>
  )
}

export default SongList