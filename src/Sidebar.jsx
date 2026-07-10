function Sidebar({ title, item1, item2, item3 }) {
  return (
    <div
      style={{
        backgroundColor: "#547792",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        maxWidth: "250px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "1.2em", marginTop: 0 }}>{title}</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ padding: "6px 0", borderBottom: "1px solid #eee" }}>{item1}</li>
        <li style={{ padding: "6px 0", borderBottom: "1px solid #eee" }}>{item2}</li>
        <li style={{ padding: "6px 0" }}>{item3}</li>
      </ul>
    </div>
  );
}

export default Sidebar;