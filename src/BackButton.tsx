import { IconButton, IconButtonProps } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <ArrowBackIcon />
    </IconButton>
  );
};
