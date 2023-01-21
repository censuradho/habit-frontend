import { icons } from "./icons";
import { theme } from "stitches.config";
import { IconProps } from "./types";
import { IconContext } from "react-icons";

export function Icon(props: IconProps) {
  const {
    name, 
    color, 
    customColor, 
    size = 20,
  } = props;

  const Svg = icons[name];

  const fill = (customColor || color && theme.colors[color].value) || undefined

  if (!Svg) return null
  
  return (
    <>
      <Svg
        color={fill}
        size={size} 
      />
    </> 
  );
}