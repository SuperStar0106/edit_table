import { StyledComponentProps, styled, keyframes } from "@mui/material";

import { CustomTheme } from "../../../styles/type";
import { relative } from "path";

type ModalComponentStyleProps = StyledComponentProps & {};

export const ModalComponentStyle = styled('div')<ModalComponentStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
      /* The Modal (background) */
      ".modal": {
        position: "fixed",
        zIndex: 1,
        paddingTop: "100px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
      },
      
      /* Modal Content */
      ".modal-content": {
        position: "relative",
        backgroundColor: customTheme.colors.white,
        margin: "auto",
        padding: 0,
        border: "1px solid " + customTheme.colors.primary40,
        width: "50%",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        WebkitAnimationName: "animatetop",
        WebkitAnimationDuration: "0.4s",
        animationName: "animatetop",
        animationDuration: "0.4s",
      },
      
      /* Add Animation */
      "@-webkit-keyframes animatetop": {
        from: { top: "-300px", opacity: 0 },
        to: { top: 0, opacity: 1 },
      },
      
      "@keyframes animatetop": {
        from: { top: "-300px", opacity: 0 },
        to: { top: 0, opacity: 1 },
      },
      
      /* The Close Button */
      ".close": {
        color: "white",
        float: "right",
        fontSize: "28px",
        fontWeight: "bold",
      },
      
      ".close:hover, .close:focus": {
        color: "#000",
        textDecoration: "none",
        cursor: "pointer",
      },
      
      ".modal-header": {
        padding: "2px 16px",
        backgroundColor: customTheme.colors.primary40,
        color: "white",
      },
      
      ".modal-body": {
        padding: "2px 16px",
      },
      
      ".modal-footer": {
        padding: "2px 16px",
        backgroundColor: customTheme.colors.primary40,
        color: "white",
      },
    };
  }
);
