import './App.css';
import {Container} from "./components/Container";
import SimpleCard from "./components/product-cards/simple-card/SimpleCard";
import {Menu} from "./components/menu-02/Menu02";


function App() {
    return (
        <div className="App">
            <Menu/>
            <Container>
                {/*<DarkProductCard/>*/}
            </Container>
                <SimpleCard name={'companyName'} company={'companyName'} price={12} sizes={['x','s']} imageSrc={'imageSrc'}/>
        </div>
    );
}

export default App;
