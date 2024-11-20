import Counter from "../../components/Counter";

const ChildTwo = () => {
  return (
    <div className="border-2 border-purple-600 m-10 max-w-4xl mx-auto rounded-md">
      <div className="bg-purple-300 h-10 w-10 m-5 rounded-full text-sm grid place-content-center">
        <p>child</p>
      </div>
      <div className="w-full grid place-content-center">
        <Counter />
      </div>
    </div>
  );
};

export default ChildTwo;
