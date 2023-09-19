import 'react-native-gesture-handler';
import HomeStack from './src/routes/home-stack';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
  );
};
