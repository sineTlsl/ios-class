import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { DateTime } from 'luxon';

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TimeText = styled.Text`
  font-size: 64px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.5);
`;

const Second = styled.Text`
  background: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  margin-top: 12px;
`;

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function ClockDigital() {
  const [date, setDate] = useState(DateTime.now());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(DateTime.now());
    }, 500);

    return () => clearInterval(id);
  }, []);

  return (
    <Container source={image} resizeMode='stretch'>
      <TimeText>{date.toFormat('HH:mm')}</TimeText>
      <Second>{date.toFormat('ss')}</Second>
    </Container>
  );
}
