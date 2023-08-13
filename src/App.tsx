import './App.css';
import {Container} from "./components/Container";
import {DarkProductCard} from "./components/product-cards/DarkProductCard";


function App() {
    return (
        <div className="App">
            <Container>
                <DarkProductCard/>
            </Container>
        </div>
    );
}

export default App;
