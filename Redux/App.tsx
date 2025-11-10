import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './Componenets/Counter';


export default function App() {

  return (

    <Provider store={store}>
      <Counter />
    </Provider>

  );
}