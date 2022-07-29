import { Container } from "react-bootstrap";

const MainContainer = ({ children, className = "" }) => {
  return (
    <Container className={className}>
      <Container>{children}</Container>
    </Container>
  );
};

export default MainContainer;
