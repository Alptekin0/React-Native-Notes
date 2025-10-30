import Root from './Root';
import { Provider } from 'react-redux';
import { store } from './Slices/store';

export default function App() {

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}