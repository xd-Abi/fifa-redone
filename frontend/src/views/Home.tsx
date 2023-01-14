import { Button } from "primereact/button";
import { AppBar, Container, Footer } from "../common/components";

const Home = () => {
  return (
    <div>
      <AppBar />

      <Container padding>
        <div className="grid pt-8">
          <div className="col-12 md:col-5">
            <h1 className="title">Is Qatar World Cup the best ever?</h1>
            <div className="pt-2">
              <p className="description">
                The 2022 World Cup in Qatar marks a new era for football. The
                host country has done a exceptional job in creating top-noth
                infrastructure and facilities to ensure a seamless tournament
                experience.
              </p>
              <Button className="font-bold mt-3">Learn More</Button>
            </div>
          </div>
          <div className="col flex justify-content-center">
            <img
              width="70%"
              className="hidden md:block"
              src={`${process.env.PUBLIC_URL}/images/world-cup-2022-logo.png`}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
