import ParentComponents from "./parentChild/parentComponents";
import EmployeeList from "./list/employeeList";
import ChartItem from "./list/chartItem";

function App() {
  return (
    <div>
      <div>
        <ParentComponents/>
      </div>
      <div>
        <EmployeeList/>
      </div>
      <div>
        <ChartItem/>
      </div>
    </div>
  );
}

export default App;
