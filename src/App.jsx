import Header from "./Header"
import Hero from "./Hero"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
function App() {
  
  return (
    <>
      <Header
      title="Daily news"
      nav1="Home"
      nav2="Sports"
      nav3="Technology"
      nav4="Contact"
      />

      <Hero
      headline = "Breaking news"
      description="A new AI technology is changing the future of education."
      />

      <Sidebar
      title="Latest news"
      item1="Football World Cup"
      item2="Stock Market Update"
      item3="Weather Forecast"
      />

      <Footer
      text="© 2026 Daily News. All Rights Reserved."
      />

    </>
  );
}

export default App;