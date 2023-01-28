import { CSS } from "@nextui-org/react";
import { StyledAppLogo } from "./styled";

type Props = {
  auto?: boolean;
  size?: number;
  width?: number;
  height?: number;
  small?: boolean;
  fill?: string;
  dark?: boolean;
  className?: string;
  css?: CSS;
};

const AppLogo = ({
  auto,
  size,
  width,
  height,
  small,
  css,
  ...props
}: Props) => {
  return (
    <StyledAppLogo
      auto={auto}
      css={css}
      height={height || size || 60}
      width={width || size || 60}
      viewBox="0 0 256 85"
      fill="none"
      {...props}
    >
      <path
        d="M0 0.0728607V85H26.446V54.3514H44.7797L51.9026 35.7334H26.446V18.5482H57.4746L64.2424 0.0728607H0ZM72.2849 0.0728607L72.2151 85H98.3758V0.0728607H72.2849ZM200.846 57.2839L210.93 21.9118L221.367 57.287L200.846 57.2839ZM224.894 0.0758964H197.814L167.768 85H193.019L196.26 73.6161H225.668L229.055 85H255.076L224.894 0.0758964ZM116.36 0.0728607V85H142.806V54.3514H161.14L168.333 35.7334H142.806V18.5452H173.835L180.676 0.0728607H116.36Z"
        fill="#000000"
      />
    </StyledAppLogo>
  );
};

export default AppLogo;
