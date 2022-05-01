import { desktopFooter, mobileFooter } from "./mockData"
import Footer from "./components/Footer"
export default function App() {
  return (
    <div className="App">
      <Footer desktopFooter={desktopFooter} mobileFooter={mobileFooter} />
    </div>
  );
}
