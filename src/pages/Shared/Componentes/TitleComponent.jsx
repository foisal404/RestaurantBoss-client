import { Helmet } from "react-helmet-async";
const TitleComponent = ({ title }) => {
  var defaultTitle = "pickNhub";
  return (
    <Helmet>
      <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
