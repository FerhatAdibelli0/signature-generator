import Card from "./UI/Card";
import EnteredDetails from "./components/EnteredDetails";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  console.log(data);

  const dataHandler = (data) => {
    setData((previous) => {
      return { ...previous, data };
    });
  };

  return (
    <div>
      <Card>
        <EnteredDetails onAdd={dataHandler} />
      </Card>
      <Card>
        <h2>This is header two</h2>
        <h2>This is header two</h2>
      </Card>
    </div>
  );
}

export default App;
