function Footer({ text }) {
  return (
    <footer
      style={{
        backgroundColor: "#213448",
        color: "#fff",
        textAlign: "center",
        padding: "12px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.9em",
      }}
    >
      <p style={{ margin: 0 }}>{text}</p>
    </footer>
  );
}

export default Footer;