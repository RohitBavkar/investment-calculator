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

  function handleUserInputs(field, value) {
    setUserInputs((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInvestment userInputs={userInputs} onChange={handleUserInputs} />
      <CalculateInvestment userInputs={userInputs} />
    </>
  );
}

export default App;
