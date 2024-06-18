import Header from "./components/Header";
import UserInvestment from "./components/UserInvestment";
import CalculateInvestment from "./components/CalculateInvestment";
import { useState } from "react";
function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 10,
  });

  const isInputValid = userInputs.duration > 0;
  function handleUserInputs(field, value) {
    setUserInputs((prev) => {
      return {
        ...prev,
        [field]: parseInt(value),
      };
    });
  }

  return (
    <>
      <Header />
      <UserInvestment userInputs={userInputs} onChange={handleUserInputs} />
      {!isInputValid && (
        <p className="center">Please enter duration greater that 0.</p>
      )}
      {isInputValid && <CalculateInvestment userInputs={userInputs} />}
    </>
  );
}

export default App;
