function DepositForm({ goals, deposit, setDeposit, handleDeposit }) {
  return (
    <form onSubmit={handleDeposit}>
      <select
        value={deposit.goalId}
        onChange={(e) => setDeposit({ ...deposit, goalId: e.target.value })}
        required
      >
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={deposit.amount}
        onChange={(e) => setDeposit({ ...deposit, amount: e.target.value })}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;