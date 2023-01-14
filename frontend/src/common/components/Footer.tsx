import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Container from "./Container";
import { EnvConfig } from "../config";

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
              placeholder="e.g. hello@fifa.com"
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
            <p className="uppercase font-bold">Learn</p>
          </div>
          <div className="col-6 md:col">
            <p className="uppercase font-bold">Social</p>
            <a href={EnvConfig.links.social.instagram}>
              <p className="text-alt">Instagram</p>
            </a>
            <a href={EnvConfig.links.social.twitter}>
              <p className="text-alt">Twitter</p>
            </a>
            <a href={EnvConfig.links.social.facebook}>
              <p className="text-alt">Facebook</p>
            </a>
            <a href={EnvConfig.links.social.youtube}>
              <p className="text-alt">Youtube</p>
            </a>
            <a href={EnvConfig.links.social.tiktok}>
              <p className="text-alt">Tiktok</p>
            </a>
          </div>
          <div className="col-6 md:col">
            <p className="uppercase font-bold">Get in touch</p>
            <a href={`mailto:${EnvConfig.emails.hello}`}>
              <p className="text-alt">{EnvConfig.emails.hello}</p>
            </a>
            <a href={`mailto:${EnvConfig.emails.press}`}>
              <p className="text-alt">{EnvConfig.emails.press}</p>
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
