import { FlatList, Pressable, Text } from 'react-native';
import { useCallback } from 'react';
import { styled } from 'styled-components/native';

const LinkItem = styled.View`
  padding: 20px 12px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  background-color: #00ff00;
`;

// const screenList = [
//   { key: 'LottoGenerator', title: '로또 번호 생성기', link: 'LottoGenerator' },
//   { key: 'ClockDigital', title: '디지털 시계', link: 'ClockDigital' },
// ];

const screenList = [
  { id: 1, title: '로또 번호 생성기', link: 'LottoGenerator' },
  { id: 2, title: '디지털 시계', link: 'ClockDigital' },
];

export default function HomeP({ navigation }) {
  const renderItem = useCallback(({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(item.link);
        }}
      >
        <LinkItem>
          <Text>{item.title}</Text>
        </LinkItem>
      </Pressable>
    );
  }, []);

  return (
    <>
      <FlatList
        data={screenList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
