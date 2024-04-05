import './App.css';
import {Menu} from "./components/menu-02/Menu02";
import CustomLoader from "./components/Gallery/3d-gallery";


function App() {
    return (
        <div className="App">
            <Menu/>
            <CustomLoader/>
        </div>
    );
}

export default App;
