import { PreviewCategories } from "components/MainPagePreviewCategories/PreviewCategories";
import { MainPageHero, Title, Span, Text, MainPageContainer } from "./MainPage.styled";
import { MainPageSearchForm } from "../../components/MainPageSearchForm/MainPageSearchForm";
import { SeeRecipes } from "components/ChooseYourBreakfast/SeeRecipes";

export const MainPage = () => {
  return (
    <>
      <MainPageHero>
        <MainPageContainer>
          <Title>
            <Span>So</Span>Yummy
          </Title>
          <Text>
            "What to cook?" is not only a recipe app, it is, in fact, <br />
            your cookbook. You can add your own recipes to <br /> save them for the future.
          </Text>
          <MainPageSearchForm styled={"black"}></MainPageSearchForm>
        </MainPageContainer>
        <SeeRecipes />
      </MainPageHero>
      <MainPageContainer>
        <PreviewCategories />
      </MainPageContainer>
    </>
  );
};
