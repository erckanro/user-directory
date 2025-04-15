import React from "react";
import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import { User } from "../types/User";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { singleLineFullAddress } from "../helpers/helpers";
import InfoRow from "./infoRow";

const UserCard = React.memo(({ user }: { user: User }) => {
  return (
    <Card
      sx={{
        background: "#e4eaf4",
        boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        height: 200,
        padding: 0,
        overflow: "hidden",
        position: "relative",
        "&:before": {
          content: "''",
          position: "absolute",
          width: "210px",
          height: "210px",
          background: "#4a84ad",
          borderRadius: "50%",
          opacity: 0.5,
          top: "-125px",
          right: "-85px",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          width: "210px",
          height: "210px",
          background: "#99cdd5",
          borderRadius: "50%",
          top: "-85px",
          right: "-115px",
          zIndex: 0,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, position: "relative", zIndex: 2 }}>
        <CardHeader
          title={user.name}
          sx={{
            padding: 0,
            "& .MuiCardHeader-content": { padding: 0 },
          }}
        />
        <Stack spacing={1} padding={0} mt={2}>
          <InfoRow icon={<LocalPhoneOutlinedIcon />} text={user.phone} />
          <InfoRow icon={<EmailOutlinedIcon />} text={user.email} />
          <InfoRow
            icon={<RoomOutlinedIcon />}
            text={singleLineFullAddress(user)}
          />
        </Stack>
      </CardContent>
    </Card>
  );
});

export default UserCard;
