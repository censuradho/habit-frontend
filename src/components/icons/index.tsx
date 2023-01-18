import { icons } from "./icons";
import { theme } from "stitches.config";
import { IconProps } from "./types";

export function Icon(props: IconProps) {
  const {
    name, color, customColor, size = 20,
  } = props;

  const Svg = icons[name];

  const fill = (customColor || color && theme.colors[color].value) || null

  if (!Svg) return null
  
  return (
    <Svg 
      style={{ 
        ...(fill && ({ fill })) 
      }} 
      size={size} 
    />
  );
}