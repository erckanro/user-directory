import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { User } from "../types/User";
import { singleLineFullAddress } from "../helpers/helpers";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import InfoRow from "./infoRow";

const UserList = React.memo(({ users }: { users: User[] }) => (
  <List disablePadding>
    {users.map((user) => (
      <Accordion
        key={user.id}
        sx={{
          p: 0,
          background: "#e4eaf4",
          boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.2)",
          "& .MuiCollapse-wrapper, .MuiCollapse-root": {
            p: 0,
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">{user.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} padding={0} mt={2}>
            <InfoRow icon={<LocalPhoneOutlinedIcon />} text={user.phone} />
            <InfoRow icon={<EmailOutlinedIcon />} text={user.email} />
            <InfoRow
              icon={<RoomOutlinedIcon />}
              text={singleLineFullAddress(user)}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    ))}
  </List>
));

export default UserList;
