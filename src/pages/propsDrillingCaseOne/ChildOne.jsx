import Counter from "../../components/Counter";

// eslint-disable-next-line react/prop-types
const ChildOne = ({ count, setCount }) => {
  return (
    <div className="border-2 border-purple-600 m-10 max-w-4xl mx-auto rounded-md">
      <div className="bg-purple-300 h-10 w-10 m-5 rounded-full text-2xl grid place-content-center">
        <p>1</p>
      </div>
      <div className="w-full grid place-content-center">
        <Counter count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default ChildOne;
