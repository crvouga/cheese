import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../data-access";

export const AuthPage = () => {
  const { signIn } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // transform: "translate(50%, 50%)",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 360, padding: 2 }}>
        <Typography variant="h1" align="center" sx={{ marginBottom: -1 }}>
          🧀
        </Typography>
        <Typography variant="h2" align="center" sx={{ marginBottom: 3 }}>
          cheese
        </Typography>

        <Button
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => {
            signIn({ authMethod: "google" });
          }}
        >
          Continue With Google
        </Button>
      </Box>
    </Box>
  );
};
