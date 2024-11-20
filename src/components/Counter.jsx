import { useCounterContext } from "../context/CounterContext";

// Props
// { count, setCount }
const Counter = () => {
  // Use Context
  const { count, setCount } = useCounterContext();

  return (
    <div className="w-full grid place-content-center">
      <p className="text-center font-semibold">Grand child</p>
      <div className="flex shrink-0 px-10 m-5 gap-5 rounded-xl justify-center items-center bg-slate-300 max-w-md h-28">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-red-300 py-2 px-5 rounded-md"
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-emerald-300 py-2 px-5 rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
