import Region from "./View/Region";
import Country from "./View/Country";
import Location from "./View/Location";
import Department from "./View/Department";
import Employee from "./View/Employee";
import Job from "./View/Job";
import Dependent from "./View/Dependent";
import Project from "./View/Project";
import ProjAssign from "./View/ProjAssign";

function App() {
  return (
    <div padding-left="20px">
      <div>
        <Region/>
        <hr color="black"/>
      </div>
      <div>
        <Country/>
        <hr color="black"/>
      </div>
      <div>
        <Location/>
        <hr color="black"/>
      </div>
      <div>
        <Department/>
        <hr color="black"/>
      </div>
      <div>
        <Employee/>
        <hr color="black"/>
      </div>
      <div>
        <Job/>
        <hr color="black"/>
      </div>
      <div>
        <Dependent/>
        <hr color="black"/>
      </div>
      <div>
        <Project/>
        <hr color="black"/>
      </div>
      <div>
        <ProjAssign/>
        <hr color="black"/>
      </div>
    </div>
  );
}

export default App;