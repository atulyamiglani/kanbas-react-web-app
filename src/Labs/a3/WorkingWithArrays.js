import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";

const WorkingWithArrays = () => {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  return (
    <>
      <h3>Working With Arrays</h3>
      <div>Number array = {numberArray1}</div>
      <div>String array = {stringArray1}</div>
      <div>Variable Array = {variableArray1}</div>
      <ArrayIndexAndLength />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindFunction />
      <FilterFunction />
    </>
  );
};

export default WorkingWithArrays;
