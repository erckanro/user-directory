import React from "react";
import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import { User } from "../types/User";

const UserGrid = React.memo(({ users }: { users: User[] }) => (
  <Grid container padding={0}>
    {users.map((user) => (
      <Grid
        key={user.id}
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{
          px: { xs: 0, sm: 2 },
        }}
      >
        <UserCard user={user} />
      </Grid>
    ))}
  </Grid>
));

export default UserGrid;
