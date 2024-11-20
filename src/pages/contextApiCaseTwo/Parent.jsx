import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  return (
    <div className="border-red-700 border-2 rounded-md mx-auto m-10 max-w-7xl">
      <div className="bg-purple-300 h-20 w-20 m-5 rounded-full text-sm grid place-content-center">
        <p>Parent</p>
      </div>
      <ChildOne />
      <ChildTwo />
    </div>
  );
};

export default Parent;
