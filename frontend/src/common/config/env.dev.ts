const EnvConfig = {
  emails: {
    hello: process.env.REACT_APP_FIFA_EMAIL_HELLO || "",
    press: process.env.REACT_APP_FIFA_EMAIL_PRESS || "",
  },
  links: {
    social: {
      instagram: process.env.REACT_APP_FIFA_SOCIAL_INSTAGRAM || "",
      twitter: process.env.REACT_APP_FIFA_SOCIAL_TWITTER || "",
      facebook: process.env.REACT_APP_FIFA_SOCIAL_FACEBOOK || "",
      youtube: process.env.REACT_APP_FIFA_SOCIAL_YOUTUBE || "",
      tiktok: process.env.REACT_APP_FIFA_SOCIAL_TIKTOK || "",
    },
  },
};

if (EnvConfig.emails.hello === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_EMAIL_HELLO environmental variable"
  );
}

if (EnvConfig.emails.press === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_EMAIL_PRESS environmental variable"
  );
}

if (EnvConfig.links.social.instagram === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_SOCIAL_INSTRAGAM environmental variable"
  );
}

if (EnvConfig.links.social.twitter === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_SOCIAL_TWITTER environmental variable"
  );
}

if (EnvConfig.links.social.facebook === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_SOCIAL_FACEBOOK environmental variable"
  );
}

if (EnvConfig.links.social.youtube === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_SOCIAL_YOUTUBE environmental variable"
  );
}

if (EnvConfig.links.social.tiktok === "") {
  throw new Error(
    ".env is missing the definition of an REACT_APP_FIFA_SOCIAL_TIKTOK environmental variable"
  );
}

export default EnvConfig;
