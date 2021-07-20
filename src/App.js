import styled from "styled-components";
import RegisterLeft from "./components/RegisterLeft/RegisterLeft";
import RegisterRight from "./components/RegisterRight/RegisterRight";
import GlobalStyle from "./style/globalStyles";
import { rwd } from "./style/variables";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (min-width: ${rwd.desktop}) {
    flex-direction: row;
    margin: 0;
    height: auto;
    padding: 0 50px 0 50px;
  }
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
