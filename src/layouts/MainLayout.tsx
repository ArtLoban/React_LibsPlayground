import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
