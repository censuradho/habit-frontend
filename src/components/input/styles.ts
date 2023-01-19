import { styled } from "stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});

export const Input = styled("input", {
  borderColor: "transparent",
  borderWidth: "1px",
  width: "100%",
  borderStyle: "solid",
  height: "3rem",
  outline: "none",
  padding: "0 1rem",
  borderRadius: '$default',
  background: '$foregroundLight',
  color: '$heading',
  
  "&::placeholder": {
    color: "$placeholders",
    fontSize: "0.8rem",
    fontWeight: "400",
  },
  
  "&:focus": {
    borderColor: "$primary",
  },

  variants: {
    hasLeftIcon: {
      true: {
        paddingLeft: "2.52rem",
      },
    },
    hasRightIcon: {
      true: {
        paddingRight: "2.7rem",
      },
    },
    hasError: {
      true: {
        borderColor: "$error",
        color: "$error",
      },
    },
  },
});

export const Label = styled("label", {
  cursor: "pointer",
  fontSize: "$xsm",
  color: '$heading'
});

export const ErrorMessage = styled('span', {
  color: "$error",
  fontSize: '$xsm'
});

export const LeftIconView = styled("div", {
  position: "absolute",
  left: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const RightIconView = styled("div", {
  position: "absolute",
  right: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const IconView = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
});