import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screnns
import ClockDigital from './screens/ClockDigital';
import LottoGenerator from './screens/LottoGenerator';
import Home from './screens/Home';
import HomeF from './screens/HomeF';
import HomeP from './screens/HomeP';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Home' component={Home} /> */}
        {/* <Stack.Screen name='HomeF' component={HomeF} /> */}
        <Stack.Screen name='HomeP' component={HomeP} />
        <Stack.Screen name='LottoGenerator' component={LottoGenerator} />
        <Stack.Screen name='ClockDigital' component={ClockDigital} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
