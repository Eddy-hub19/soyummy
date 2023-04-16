import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={323}
    viewBox="0 0 300 323"
    backgroundColor="#adb3ad"
    foregroundColor="#959393"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="300" height="323" />
  </ContentLoader>
);

export const LoaderCategoryList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "0 auto", gap: "14px" }}>
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
    </div>
  );
};
