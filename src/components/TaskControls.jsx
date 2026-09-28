import { ArrowDownWideNarrow } from "lucide-react";

const TaskControls = ({
  showOnlyIncomplete,
  setShowOnlyIncomplete,
  sortTasks,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <label style={{ display: "flex", justifyContent: "center" }}>
        Show only incomplete
        <input
          type="checkbox"
          style={{ marginRight: "10px" }}
          checked={showOnlyIncomplete}
          onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
        />
      </label>
      <button
        style={{ border: "none", background: "none", cursor: "pointer" }}
        onClick={sortTasks}
      >
        <ArrowDownWideNarrow />
      </button>
    </div>
  );
};
export default TaskControls;