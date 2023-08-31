import { ThreeMp } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const Theme = createTheme({
  primary: {
    main: "#0C133B", // Set the primary color
    dark: "#06091F", // Darker shade for primary
    light: "#3F4B8C", // Lighter shade for primary
  },
  secondary: {
    main: "#FF6B6B", // A secondary color for contrast
    dark: "#D93636", // Darker shade for secondary
    light: "#FFA5A5", // Lighter shade for secondary
  },
  error: {
    main: "#D32F2F", // Error color
  },
  warning: {
    main: "#FFC107", // Warning color
  },
  info: {
    main: "#1976D2", // Info color
  },
  success: {
    main: "#4CAF50", // Success color
  },
  text: {
    primary: "#333333", // Default text color
    secondary: "#666666", // Secondary text color for lighter content
  },
  background: {
    default: "#ffffff", // Default background color
    paper: "#F4F4F4", // Background color for paper elements
  },
  action: {
    hover: "#E0E0E0", // Hover color for interactive elements
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "600",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "600",
    },
  },
});

export default Theme;
