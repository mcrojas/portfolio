import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
    const { t } = useTranslation();

    const siteTitle = title || t("seo.title", "Mary Rojas | Frontend Developer");
    const siteDescription = description || t("seo.description", "Frontend Developer utilizing ReactJS and modern web technologies.");
    const siteKeywords = keywords || t("seo.keywords", "frontend, developer, react, web");
    const siteUrl = url || "https://mcrojas.github.io/portfolio/";
    const siteImage = image || "/sajor-dev.png"; // Maintain existing image

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />
            <meta name="author" content="Mary Rojas" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
        </Helmet>
    );
};

export default SEO;
