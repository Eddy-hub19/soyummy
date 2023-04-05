import {
  FooterContainer,
  FooterBg,
  Wrap,
  WrapDesk,
  FooterSm,
} from './FooterAssembly.styled';

import { FooterText } from './FooterText/FooterText';
import { FooterNav } from './FooterNav/FooterNav';
import { FooterForm } from './FooterForm/FooterForm';
import { SocialLinks } from './SocialLinks/SocialLinks';

export const FooterAssembly = () => {
  return (
    <FooterContainer>
      <FooterBg>
        <WrapDesk>
          <Wrap>
            <FooterText />
            <FooterNav />
          </Wrap>
          <FooterForm />
        </WrapDesk>
        <SocialLinks />
      </FooterBg>
      <FooterSm>
        <p>
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </FooterSm>
    </FooterContainer>
  );
};
