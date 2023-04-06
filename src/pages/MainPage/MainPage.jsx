import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { MainPageSearchForm } from 'components/MainPageSearchForm/MainPageSearchForm';
import { PreviewCategories } from 'components/MainPagePreviewCategories/PreviewCategories';
export const MainPage = () => {
  return (
    <>
      <h2>Main Page</h2>
      <ChooseYourBreakfast />
      <MainPageSearchForm />
      <PreviewCategories />
    </>
  );
};
