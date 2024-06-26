import { routes } from "../../routes/routes";
import CompanyName from "../CompanyName/CompanyName";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";


const Navbar = () => {
  const history = useHistory();
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{display:"flex" , justifyContent:"space-betweeen" , flexDirection:"row"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >
            <CompanyName />
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {routes.map(({ name, id, url }) => (
              <Button
                key={id}
                onClick={() => history.push(url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
