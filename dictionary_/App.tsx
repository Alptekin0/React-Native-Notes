import { Provider } from "react-redux";
import MainPage from "./componenets/MainPage";
import { store } from "./store/store";


export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
