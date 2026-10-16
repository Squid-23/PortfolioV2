import AppRoutes from "./routes/AppRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";


function App() {

  return (
    <>

      <Preloader />

      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />

    </>
  );

}


export default App;