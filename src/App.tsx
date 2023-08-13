import './App.css';
import {Container} from "./components/Container";
import {DarkProductCard} from "./components/product-cards/modern-card/DarkProductCard";
import SimpleCard from "./components/product-cards/simple-card/SimpleCard";


function App() {
    return (
        <div className="App">
            <Container>
                <DarkProductCard/>
            </Container>
                <SimpleCard name={'companyName'} company={'companyName'} price={12} sizes={['x','s']} imageSrc={'imageSrc'}/>
        </div>
    );
}

export default App;
