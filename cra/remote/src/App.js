import LocalButton from './Button';
import Header from '../../sharedComponent/src/components/headers/header';
import Footer from '../../sharedComponent/src/components/footers/footer';
import LandingPage from '../../sharedComponent/src/components/landingpages/LandingPage';

const App = () => (
  <div>
    <Header></Header>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LandingPage title="Remote landing Page" />
    <LocalButton />
    <Footer />
  </div>
);

export default App;
