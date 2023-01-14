interface IAppLogoProps {
  size?: number;
}

const AppLogo = (props: IAppLogoProps) => {
  return (
    <img
      alt="logo"
      src={`${process.env.PUBLIC_URL}/images/fifa-logo.svg`}
      width={props.size}
      className="mr-2"
    />
  );
};

export default AppLogo;
