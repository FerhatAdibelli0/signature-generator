import Card from "./UI/Card";
import EnteredDetails from "./components/EnteredDetails";
import { Fragment, useState } from "react";
import OutputedValues from "./components/OutputedValues";

function App() {
  const [hasData, setHasData] = useState(false);
  const [enteredData, setEnteredData] = useState(null);

  const dataHandler = (data) => {
    setEnteredData((previous) => {
      return { ...previous, ...data };
    });
    setHasData(true);
  };

  return (
    <Fragment>
      <Card>
        <EnteredDetails onAdd={dataHandler} />
      </Card>
      <Card>
        {hasData && <OutputedValues data={enteredData} />}
        {!hasData && <OutputedValues header="There is not signature yet" />}
      </Card>
    </Fragment>
  );
}

export default App;
