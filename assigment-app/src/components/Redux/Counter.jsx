import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  let count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "DEC", value: 1 })}>-</button>
      {""} <span>{count.count}</span> {""}
      <button onClick={() => dispatch({ type: "INC", value: 1 })}>+</button>
    </div>
  );
};

export default Counter;
