import React, {
  useState,
  useMemo,
  useCallback,
  Suspense,
  lazy,
  useEffect,
} from "react";
import {
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
  IconButton,
} from "@mui/material";
import SearchBar from "./components/SearchBar";
import useUsers from "./hooks/useUsers";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { debounce } from "lodash";

const UserGrid = lazy(() => import("./components/UserGrid"));
const UserList = lazy(() => import("./components/UserList"));

type ViewMode = "grid" | "list";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const { users, loading, error, fetchUsers } = useUsers();

  const debouncedSearchChange = useMemo(
    () =>
      debounce((term: string) => {
        setDebouncedTerm(term);
      }, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearchChange.cancel();
    };
  }, [debouncedSearchChange]);

  const handleSearchChange = useCallback(
    (term: string) => {
      setInputValue(term);
      debouncedSearchChange(term);
    },
    [debouncedSearchChange]
  );

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [users, debouncedTerm]);

  const handleToggleView = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  const UserView = useMemo(() => {
    if (filteredUsers.length === 0) {
      return <Typography>No users found.</Typography>;
    }

    return viewMode === "grid" ? (
      <UserGrid users={filteredUsers} />
    ) : (
      <UserList users={filteredUsers} />
    );
  }, [filteredUsers, viewMode]);

  if (loading) {
    return (
      <Box padding={3} textAlign="center" aria-live="polite">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box padding={3}>
        <Alert severity="error">
          {error}{" "}
          <Button onClick={fetchUsers} variant="contained" color="primary">
            Retry
          </Button>
        </Alert>
      </Box>
    );
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#4a84ad",
            justifySelf: "center",
          }}
        >
          User Directory
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: { xs: 0, sm: 10, md: 30, lg: 50 },
            mb: 3,
          }}
        >
          <SearchBar
            searchTerm={inputValue}
            onSearchChange={handleSearchChange}
          />
          <IconButton
            aria-label={viewMode === "grid" ? "grid view" : "list view"}
            onClick={handleToggleView}
            sx={{
              height: 50,
              width: 50,
              background: "#99cdd5",
              borderRadius: "0 10px 10px 0",
            }}
          >
            {viewMode === "grid" ? (
              <ViewStreamOutlinedIcon />
            ) : (
              <GridViewOutlinedIcon />
            )}
          </IconButton>
        </Box>

        <Suspense fallback={<CircularProgress />}>{UserView}</Suspense>
      </main>
    </Suspense>
  );
};

export default App;
