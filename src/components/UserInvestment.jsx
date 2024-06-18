function UserInvestment({ onChange, userInputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInputs.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInputs.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return Anually</label>
          <input
            type="number"
            value={userInputs.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.valu)}
            required
          />
        </p>
        <p>
          <label>Duration in Years</label>
          <input
            type="number"
            value={userInputs.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInvestment;
