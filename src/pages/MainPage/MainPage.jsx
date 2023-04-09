import { Container } from 'components/Container/Container';
import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { MainPageSearchForm } from 'components/MainPageSearchForm/MainPageSearchForm';
import { PreviewCategories } from 'components/MainPagePreviewCategories/PreviewCategories';
import { axiosInstance } from 'service/API/axios';

// =================================================================================================//
export const MainPage = () => {
  console.log(axiosInstance.defaults.headers.common.Authorization);
  return (
    <Container>
      {/* <h2>Main Page</h2> */}
      <ChooseYourBreakfast />
      <MainPageSearchForm />
      <PreviewCategories />
    </Container>
  );
};
