import {IconProps} from ".";

const SpeachBubbleIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      fill={fill}
      viewBox="0 0 24 24"
      height={size || height || 24}
      width={size || width || 24}
      {...props}
    >
      <path d="M 12 2 C 7.0414839 2 3 6.0414839 3 11 C 3 15.958516 7.0414839 20 12 20 L 12 23.091797 L 13.539062 22.105469 C 15.774897 20.671437 19.852053 17.575344 20.798828 12.882812 C 20.928446 12.277558 21 11.64776 21 11 C 21 6.0414839 16.958516 2 12 2 z M 12 4 C 15.877484 4 19 7.1225161 19 11 C 19 11.504182 18.94463 11.995387 18.841797 12.472656 L 18.839844 12.480469 L 18.837891 12.486328 C 18.24375 15.434377 15.971604 17.605199 14 19.138672 L 14 17.798828 L 12.875 17.939453 C 12.574056 17.977071 12.283936 18 12 18 C 8.1225161 18 5 14.877484 5 11 C 5 7.1225161 8.1225161 4 12 4 z" />
    </svg>
  );
};

export default SpeachBubbleIcon;
