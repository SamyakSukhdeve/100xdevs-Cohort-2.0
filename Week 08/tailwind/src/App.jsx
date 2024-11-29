import "./App.css";
import RevenueCard from "./components/RevenueCard";
function App() {
  return (
    <div>
      <RevenueCard
        title={"Amount pending"}
        amount={"98,234.56"}
        orderCount={13}
      />
    </div>
  );
}

export default App;
