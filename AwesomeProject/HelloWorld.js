import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';

type HWProps = {
  text: string;
};

const HelloWorld = (props: HWProps) => {
  const [isEnabled, setIsEnabled] = useState(true)
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>{props.text}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
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
        defaultValue="You can type in me"
      />
       <Button
        onPress={() => {
          setIsEnabled(false);
        }}
        disabled={!isEnabled}
        title={isEnabled ? 'Click me!' : 'I\'m off!'}
      />
    </ScrollView>
  );
};

export default HelloWorld;