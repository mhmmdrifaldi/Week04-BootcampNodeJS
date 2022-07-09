import RegionView from "./Region/RegionView";
import CountryView from "./Country/CountryView";
import LocationView from "./Location/LocationView";
import DepartmentView from "./Department/DepartmentView";
import JobView from "./Job/JobView";
import DependentView from "./Dependent/DependentView";

function App() {
  return (
    <div>
      <div>
        <RegionView/>
        <hr color="black"/>
      </div>
      <div>
        <CountryView/>
        <hr color="black"/>
      </div>
      <div>
        <LocationView/>
        <hr color="black"/>
      </div>
      <div>
        <DepartmentView/>
        <hr color="black"/>
      </div>
      <div>
        <JobView/>
        <hr color="black"/>
      </div>
      <div>
        <DependentView/>
        <hr color="black"/>
      </div>
    </div>
  );
}

export default App;