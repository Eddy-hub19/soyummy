import React from "react"
import ContentLoader from "react-content-loader"

const LoaderList = (props) => (
  <ContentLoader 
    speed={4}
    width={500}
    height={350}
    viewBox="0 0 500 350"
    backgroundColor="#adb3ad"
    foregroundColor="#63d965"
    {...props}
  >
    <rect x="30" y="10" rx="3" ry="3" width="31" height="14" /> 
    <rect x="88" y="10" rx="3" ry="3" width="66" height="14" />
  </ContentLoader>
)

export const LoaderCategory = () => {
  return (
    <div>
          <LoaderList />
    </div>
  );
};


