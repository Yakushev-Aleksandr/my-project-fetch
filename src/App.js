import react from "./img/react.png";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      style={{
        marginTop: "20px",
      }}
    >
      <img
        src={react}
        alt="test"
        style={{
          display: "block",
          margin: "auto",
        }}
      />
    </Box>
  );
}

export default App;
