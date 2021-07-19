import styled from "styled-components";
import RegisterLeft from "./components/RegisterLeft/RegisterLeft";
import RegisterRight from "./components/RegisterRight/RegisterRight";
import GlobalStyle from "./style/globalStyles";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

function App() {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <RegisterLeft />
      <RegisterRight />
    </StyledWrapper>
  );
}

export default App;
