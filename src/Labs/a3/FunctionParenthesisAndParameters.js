const FunctionParenthesisAndParameters = () => {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return (
    <>
      <h3>Paranthesis and Parameters</h3>
      <div>two squared = {twoSquared}</div>
      <div>square = {square(2)}</div>
      <div>three plus one = {threePlusOne}</div>
      <div>plus one = {plusOne(2)}</div>
    </>
  );
};

export default FunctionParenthesisAndParameters;
