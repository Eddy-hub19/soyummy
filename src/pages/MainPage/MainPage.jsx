import { Container } from 'components/Container/Container';
import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { PreviewCategories } from 'components/MainPagePreviewCategories/PreviewCategories';
import { axiosInstance } from 'service/API/axios';
import { MainPageHero, Title, Span, HeroTextWrapper, Text } from './MainPage.styled';
import {MainPageSearchForm} from "../../components/MainPageSearchForm/MainPageSearchForm"

// =================================================================================================//
export const MainPage = () => {
  console.log(axiosInstance.defaults.headers.common.Authorization);
  return (
    <>
      <MainPageHero>
        <HeroTextWrapper>
          <Title>
            <Span>So</Span>Yummy
          </Title>
          <Text>
            "What to cook?" is not only a recipe app, it is, in fact, <br/> your
            cookbook. You can add your own recipes to <br/> save them for the
            future.
          </Text>
        </HeroTextWrapper>
      </MainPageHero>
    <Container>
      {/* <h2>Main Page</h2> */}
      <ChooseYourBreakfast />
      <MainPageSearchForm styled={'black'}></MainPageSearchForm>
      <PreviewCategories />
      </Container>
    </>
  );
};
