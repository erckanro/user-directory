import React from "react";
import { Box, Typography } from "@mui/material";

export interface InfoRowProps {
  icon: React.ReactNode;
  text: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, text }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "start", gap: 1, padding: 0 }}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default InfoRow;
