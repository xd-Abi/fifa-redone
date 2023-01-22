import { IconProps } from ".";

const TagIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      {...props}
      fill="none"
    >
      <path
        d="M20.9828 13.6737L13.8128 20.8437C13.627 21.0296 13.4064 21.1771 13.1637 21.2778C12.9209 21.3784 12.6606 21.4302 12.3978 21.4302C12.1349 21.4302 11.8747 21.3784 11.6319 21.2778C11.3891 21.1771 11.1685 21.0296 10.9828 20.8437L2.39277 12.2637V2.26367H12.3928L20.9828 10.8537C21.3553 11.2284 21.5644 11.7353 21.5644 12.2637C21.5644 12.792 21.3553 13.2989 20.9828 13.6737Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.39277 7.26367H7.40277"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TagIcon;
