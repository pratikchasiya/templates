import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../src/components/Header'
import Banner from './components/pages/Banner';
import ImageTools from './components/pages/Tools';
import Arrivals from './components/pages/Arrivals';
import NeatAndClean from './components/pages/NeatAndClean';
import Seller from './components/pages/Seller';
import Solution from './components/pages/Solution';
import SignUp from './components/pages/SignUp';
import Detail from './components/pages/Detail';
import Instagram from './components/pages/Instagram';
import Image from '../src/components/pages/Image'
import FAQ from './components/pages/FAQ';
import SupplierAndWares from './components/pages/SupplierAndWares';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <ImageTools />
    <Arrivals />
    <NeatAndClean />
    <Seller />
    <Solution />
    <SignUp />
    <Detail />
    <Instagram />
    <Image />
    <FAQ />
    <SupplierAndWares />
    <Footer />
    </div>
  );
}

export default App;
