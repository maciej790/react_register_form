import React from "react";
import {
  Button,
  FaceBookIcon,
  GoogleIcon,
  StyledSocialButtons,
} from "./StyledSocialButtons";

function SocialButtons() {
  return (
    <StyledSocialButtons>
      <Button>
        <GoogleIcon>
          <i className="fab fa-google"></i>
        </GoogleIcon>
        Google
      </Button>
      <Button>
        <FaceBookIcon>
          <i className="fab fa-facebook"></i>
        </FaceBookIcon>
        Facebook
      </Button>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
