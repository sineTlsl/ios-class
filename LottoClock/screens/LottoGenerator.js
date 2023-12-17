import * as React from 'react';
import { Button } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Ball = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${(props) => {
    if (props.value < 11) {
      return 'yellow';
    } else if (props.value < 21) {
      return 'blue';
    } else if (props.value < 31) {
      return 'red';
    } else if (props.value < 41) {
      return 'green';
    } else if (props.value <= 45) {
      return 'purple';
    }
  }};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const Label = styled.Text``;

let numbers = [];

function getNumbers() {
  let newNumbers = _.shuffle(numbers);
  newNumbers.length = 6;
  return newNumbers;
}

// 1부터 45 숫자를 생성
_.times(45, (n) => numbers.push(n + 1));

function SingleNumber(props) {
  return (
    <Ball key={props.number} value={props.number}>
      <Label>{props.number}</Label>
    </Ball>
  );
}

export default function LottoGenerator() {
  const [displayNumbers, setNumbers] = React.useState(getNumbers());

  return (
    <Container>
      <Row>
        {displayNumbers.map((item) => {
          {
            return <SingleNumber number={item} />;
          }
        })}
      </Row>
      <Button
        title='새로받기'
        onPress={() => {
          setNumbers(getNumbers());
        }}
      />
    </Container>
  );
}
