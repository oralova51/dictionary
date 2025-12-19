import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
import UserApi from "../../entities/user/api/UserApi";
import { LogOut } from "lucide-react";
import { Button } from "react-bootstrap";

function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await UserApi.logout();
      setUser({ status: "guest", data: null });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Col sm={3}>Coding Wiki</Col>
        <Col>
          <Navbar.Brand href="/">Главная</Navbar.Brand>
          <Navbar.Brand href="/words">Словарь</Navbar.Brand>
          <Navbar.Toggle />
        </Col>
        <Col sm={4}>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Вы вошли как: {user?.data?.name || "Гость"}
              {user.status === "logged" ? (
                <Button onClick={logoutHandler}>
                  <LogOut />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    navigate("/registery");
                  }}
                >
                  Войти
                </Button>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Navigation;
