import { Container } from "../Utility";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="grid">
          <div className="col-12 md:col-8">
            <h2 className="font-bold">Get Football Updates to Your Inbox</h2>
          </div>
          <div className="col-12 md:col bg-white">2</div>
        </div>
        <div className="grid mt-5">
          <div className="col-6 md:col bg-primary">1</div>
          <div className="col-6 md:col bg-white">2</div>
          <div className="col-6 md:col bg-primary">3</div>
          <div className="col-6 md:col bg-white">2</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
