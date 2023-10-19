import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import Ternary from "./Ternary";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <Ternary />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <AddingAndRemovingDataToFromArrays />
      <TemplateLiterals />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
