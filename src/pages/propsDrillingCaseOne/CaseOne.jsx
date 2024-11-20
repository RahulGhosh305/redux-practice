import Parent from "./Parent";

const CaseOne = () => {
  return (
    <>
      <h2 className="text-center text-purple-600 font-semibold">
        Case One - Props Drilling Way Passes Data
      </h2>
      <Parent />
    </>
  );
};

export default CaseOne;
