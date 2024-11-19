import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  return (
    <div className="border-red-700 border-2 rounded-md mx-auto m-10 max-w-7xl">
      <ChildOne />
      <ChildTwo />
    </div>
  );
};

export default Parent;
