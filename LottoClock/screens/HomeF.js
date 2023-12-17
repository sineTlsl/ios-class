import { Button, FlatList } from 'react-native';
import { useCallback } from 'react';

const screenList = [
  { key: 'LottoGenerator', title: '로또 번호 생성기', link: 'LottoGenerator' },
  { key: 'ClockDigital', title: '디지털 시계', link: 'ClockDigital' },
];

export default function HomeF({ navigation }) {
  const renderItem = useCallback(({ item }) => {
    return (
      <Button
        title={item.title}
        onPress={() => {
          navigation.navigate(item.link);
        }}
      />
    );
  }, []);

  return (
    <>
      <FlatList data={screenList} renderItem={renderItem} />
    </>
  );
}
