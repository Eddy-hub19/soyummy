import { useMediaRules } from 'hooks/MediaRules';
import { FooterTextContainer, FooterContent, Link } from './FooterText.styled';
import footerLogo from '../../../images/footer/logo_tablet-desk_footer.svg';

export const FooterText = () => {
  const { isMobile } = useMediaRules();
  return (
    <FooterTextContainer>
      <Link to="/">
        <img src={footerLogo} alt="logo footer" />
        So Yummy
      </Link>
      {!isMobile && (
        <>
          <FooterContent>
            <li>Database of recipes that can be replenished </li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </FooterContent>
        </>
      )}
    </FooterTextContainer>
  );
};
