import { Provider, useSelector } from "react-redux";
import Counter from "./Counter";
import store from "../../app/store";
import "../../css/Redux/index.css";

const Redux = () => {
  // let count = useSelector((state) => state.counter);
  return (
    <div className="redux-app">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
