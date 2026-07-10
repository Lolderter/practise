function Hero({ headline, description }) {
  return (
    <div
      style={{
        backgroundColor: "#547792",
        padding: "40px 24px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2em", margin: "0 0 8px" }}>{headline}</h1>
      <p style={{ fontSize: "1.1em", color: "#EAE0CF" }}>{description}</p>
    </div>
  );
}

export default Hero;