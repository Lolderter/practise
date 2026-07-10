// ---- Style 1: using the "props" object directly ----
function Layout(props) {
  return (
    <div
      style={{
        border: "1px solid #2c2c2c",
        borderRadius: "18px",
        padding: "16px",
        margin: "16px",
        backgroundColor: "#4d4747",
        fontFamily: "Arial, sans-serif",
        color: "red",
        fontSize: "1.5em",
      }}
    >
      <h2>Title: {props.title}</h2>
      <h3>Desc: {props.desc}</h3>
    </div>
  );
}

// ---- Style 2: destructuring props right in the function signature ----
function Layoutdis({ title, desc }) {
  return (
    <div
      style={{
        border: "1px solid #2c2c2c",
        borderRadius: "18px",
        padding: "16px",
        margin: "16px",
        backgroundColor: "#4d4747",
        fontFamily: "Arial, sans-serif",
        color: "red",
        fontSize: "1.5em",
      }}
    >
      <h2>Title: {title}</h2>
      <h3>Desc: {desc}</h3>
    </div>
  );
}

// ---- Using both in one App to compare ----
function App() {
  return (
    <>
      <Layout title="Welcome" desc="This uses props.title / props.desc" />
      <Layoutdis title="Destructured" desc="This uses { title, desc } directly" />
    </>
  );
}

export default App;