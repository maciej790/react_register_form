import styled from "styled-components";
import RegisterLeft from "./components/RegisterLeft/RegisterLeft";
import GlobalStyle from "./style/globalStyles";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <RegisterLeft />
    </StyledWrapper>
  );
}

export default App;
