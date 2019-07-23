import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({
      enabled: true,
      host: '10.0.2.2', // server ip
      port: 9090,
    });

  tron.clear();

  console.tron = tron;
}
