import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border-red-700 border-2 rounded-md mx-auto m-10 max-w-7xl">
      <div className="bg-purple-300 h-20 w-20 m-5 rounded-full text-sm grid place-content-center">
        <p>Parent</p>
      </div>
      <ChildOne count={count} setCount={setCount} />
      <ChildTwo count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
