import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
