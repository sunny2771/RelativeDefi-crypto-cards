import classes from "./App.module.css";
import { HiTrendingUp } from "react-icons/hi";
import Cards from "./Cards";
import { data } from "./CardData/CardData";

function App() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.heading}>
          <HiTrendingUp /> Trending Assets
        </div>
        <div className={classes.cardContainer}>
          {data.map((card) => {
            return <Cards key={card.id} card={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
