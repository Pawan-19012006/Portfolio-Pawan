import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Pawan Eswaran — Software Developer", 
  description = "Portfolio of Pawan Eswaran — Software Developer specializing in Backend Development, Data Engineering, scalable systems, and developer-focused software.",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:creator" content="@PawanEswaran" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
