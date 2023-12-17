import { Button, View, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <>
      <ScrollView style={{ height: 150 }}>
        <Button
          title='로또 번호 생성기'
          onPress={() => navigation.navigate('LottoGenerator')}
        />
        <Button
          title='디지털 시계'
          onPress={() => navigation.navigate('ClockDigital')}
        />
      </ScrollView>
      <View style={{ flex: 1 }} />
    </>
  );
}
