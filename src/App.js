import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
  <Provider store={appStore}>
     <Body />
  </Provider>//provided store to body
  );
}

export default App;
