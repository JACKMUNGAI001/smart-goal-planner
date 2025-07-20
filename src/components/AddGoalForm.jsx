function AddGoalForm({ newGoal, setNewGoal, handleAddGoal }) {
  return (
    <form onSubmit={handleAddGoal}>
      <input
        type="text"
        placeholder="Goal Name"
        value={newGoal.name}
        onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={newGoal.targetAmount}
        onChange={(e) => setNewGoal({ ...newGoal, targetAmount: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={newGoal.category}
        onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
        required
      />
      <input
        type="date"
        value={newGoal.deadline}
        onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;