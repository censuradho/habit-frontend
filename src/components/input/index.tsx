import { Icon } from "@/components/icons";
import { IconProps } from "@/components/icons/types";
import {
  FormEvent, forwardRef, KeyboardEvent, memo,
} from "react";

import * as Styles from "./styles";
import { InputProps } from "./types";

export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    errorMessage,
    fullWidth,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    defaultValue,
    mask,
    ...otherProps
  } = props;
  const hasError = !!errorMessage;

  const renderLabel = () => {
    if (!label) return null;
    return (
      <Styles.Label
        htmlFor={otherProps?.id || ""}
      >
        {label}
      </Styles.Label>
    );
  };

  const renderErrorMessage = () => {
    if (!hasError) return null;

    return (
      <Styles.ErrorMessage color="error">{errorMessage}</Styles.ErrorMessage>

    );
  };

  const renderIcon = (icon: IconProps, callback?: () => void) => {
    if (callback) {
      return (
        <button
          aria-label="icon"
          onClick={callback}
        >
          <Icon {...icon}/>
        </button>
      );
    }

    return (
      <Icon {...icon} />
    );
  };

  const renderLeftIcon = () => {
    if (!leftIcon) return null;

    return (
      <Styles.LeftIconView>
        {renderIcon(leftIcon, onLeftIconClick)}
      </Styles.LeftIconView>
    );
  };

  const renderRightIcon = () => {
    if (!rightIcon) return null;

    return (
      <Styles.RightIconView>
        {renderIcon(rightIcon, onRightIconClick)}
      </Styles.RightIconView>
    );
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!mask) return;
    return mask(event);
  };

  return (
    <Styles.Container fullWidth={fullWidth}>
      {renderLabel()}
      <Styles.IconView>
        {renderLeftIcon()}
        <Styles.Input
          {...otherProps}
          ref={ref}
          hasError={hasError}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          onKeyUp={handleKeyUp}
        />
        {renderRightIcon()}
      </Styles.IconView>
      {renderErrorMessage()}
    </Styles.Container>
  );
});

export const Input = memo(BaseInput);