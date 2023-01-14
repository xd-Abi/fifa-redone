import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Container from "./Container";
import { Config } from "../config";

const Footer = () => {
  return (
    <div className="footer pt-7 pb-7">
      <Container>
        <div className="grid">
          <div className="col-12 md:col-7 flex justify-content-center md:justify-content-start">
            <h1 className="font-bold text-center">
              Get Football Updates to Your Inbox
            </h1>
          </div>
          <div className="col-12 md:col mt-3">
            <InputText
              className="p-inputgroup"
              placeholder={`e.g. ${Config.emails.hello}`}
              required
            />
          </div>
          <div className="col-12 md:col-2 mt-3">
            <Button className="p-inputgroup" label="Join Mailing List" />
          </div>
        </div>
        <div className="divider mt-6 mb-6" />
        <div className="grid mt-5">
          <div className="col-6 md:col">
            <p className="uppercase font-bold">Explore</p>
          </div>
          <div className="col-6 md:col">
            <p className="uppercase font-bold">Partners</p>
            {Config.links.partners.map((partner) => (
              <a href={partner.url} key={partner.name}>
                <p className="text-alt">{partner.name}</p>
              </a>
            ))}
          </div>
          <div className="col-6 md:col">
            <p className="uppercase font-bold">Social</p>
            {Config.links.socials.map((social) => (
              <a href={social.url} key={social.provider}>
                <p className="text-alt">{social.provider}</p>
              </a>
            ))}
          </div>
          <div className="col-6 md:col">
            <p className="uppercase font-bold">Get in touch</p>
            <a href={`mailto:${Config.emails.hello}`}>
              <p className="text-alt">{Config.emails.hello}</p>
            </a>
            <a href={`mailto:${Config.emails.press}`}>
              <p className="text-alt">{Config.emails.press}</p>
            </a>
          </div>
        </div>
        <div className="divider mt-6 mb-6" />
        <div className="grid flex justify-content-center md:justify-content-start">
          <img
            src={`${process.env.PUBLIC_URL}/images/fifa-logo.svg`}
            width={150}
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
