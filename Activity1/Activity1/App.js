import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Telin, Charles Kevin F</Text>
      <View>
        <Text>IT- 302</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.zAGoyB47gezDlB80HFLEzgHaGx?rs=1&pid=ImgDetMain',
          }}
          style={{width: 200, height: 200}}
          />
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            defaultValue="okay pa naman"
          />
    </ScrollView>
  );
};

export default App;