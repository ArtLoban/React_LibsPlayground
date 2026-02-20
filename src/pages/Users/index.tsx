import type { FC } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, List, ListItem, Typography } from "@mui/material";

export const getUsers = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

export const UsersPage: FC = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading users</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <List>
        {data.map((user: any) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </List>
    </>
  );
};
