import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({ searchTerm, onSearchChange }) => {
    return (
      <TextField
        label="Search Users"
        placeholder="Search"
        aria-label="Search users"
        variant="filled"
        size="small"
        fullWidth
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          minWidth: 150,
          "& .MuiInputBase-root": {
            height: 50,
            background: "#e4eaf4",
            borderRadius: "10px 0 0",
          },
        }}
      />
    );
  }
);

export default SearchBar;
