/* eslint-disable react/no-danger */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Helmet = ({
  title, description, translations, url, image, card, type, twitterUser,
  unlisted, pathConnector, locales, publishedTime, keywords, modifiedTime,
  locale,
}) => {
  const translationsExists = translations.length > 0;
  const maxCharacters = 155;
  const descriptionCleaned = description.length > maxCharacters
    ? `${description.substring(0, maxCharacters)}...`
    : description;

  const cardLayout = {
    default: 'summary', // Title, description, and thumbnail.
    large: 'summary_large_image', // Similar to the Summary Card, but with a prominently-featured image.
    app: 'app', // A Card with a direct download to a mobile app.
  };

  return (
    <Head>
      <title>{title.length > 0 ? `${title} | 4Geeks` : '4Geeks'}</title>
      <meta name="description" content={descriptionCleaned} />
      {unlisted === true && <meta name="robots" content="noindex" />}
      <link rel="icon" href="/4Geeks.ico" />
      {/* <!-- Primary Meta Tags --> */}
      {Array.isArray(keywords) && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {typeof keywords === 'string' && <meta name="keywords" content={keywords} />}

      {locales.length > 0 && !translationsExists && (
        <link rel="canonical" hrefLang="x-default" href={`https://4geeks.com${pathConnector}`} />
      )}

      {/* <---------------- Single web pages (ex: /projects) ----------------> */}
      {locales.length > 0 && !translationsExists && locales.map((lang) => lang !== 'default' && (
        <link key={`${lang} - ${pathConnector}`} rel="canonical" hrefLang={lang} href={`https://4geeks.com/${lang}${pathConnector}`} />
      ))}

      {/* <---------------- Assets ----------------> */}
      {translationsExists && Object.keys(translations).map((lang) => {
        const language = lang === 'us' ? 'en' : lang;
        const urlAlternate = `https://4geeks.com/${language}${pathConnector}/${translations[lang]}`;

        return (
          <link
            key={`${lang} - ${translations[lang]}`}
            rel="alternate"
            hrefLang={language}
            href={urlAlternate}
          />
        );
      })}

      {/* <---------------- Open Graph protocol ----------------> */}
      <meta property="og:site_name" content="4Geeks" />
      <meta property="og:title" contentn={title || '4Geeks'} />
      <meta property="og:url" content={url.length > 0 ? `https://4geeks.com${url}` : 'https://4geeks.com'} />
      <meta property="og:description" content={descriptionCleaned} />
      <meta property="og:image" content={image} />
      {locales.length > 0 && locales.map((lang) => lang !== 'default' && (
        <>
          {locale === lang ? (
            <meta content={lang} property="og:locale" />
          ) : (
            <meta content={lang} property="og:locale:alternate" />
          )}
        </>
      ))}
      {image.includes('https:') && <meta property="og:image:secure_url" content={image} />}
      {/* <meta property="og:image:width" content={imageProps.width} />
      <meta property="og:image:height" content={imageProps.height} /> */}

      <meta property="og:type" content={type} />
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* <---------------- Twitter ----------------> */}
      <meta property="twitter:card" content={cardLayout[card]} />
      <meta property="twitter:site" content={twitterUser} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={descriptionCleaned} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={descriptionCleaned} />
    </Head>
  );
};

Helmet.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  twitterUser: PropTypes.string,
  unlisted: PropTypes.bool,
  translations: PropTypes.objectOf(PropTypes.any),
  pathConnector: PropTypes.string,
  locales: PropTypes.arrayOf(PropTypes.string),
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  card: PropTypes.string,
  locale: PropTypes.string,
};

Helmet.defaultProps = {
  title: '',
  url: '',
  description: "4Geeks's mission is to accelerate the way software developers learn and evolve.",
  image: 'https://4geeks.com/static/images/4geeks.png',
  type: 'website',
  twitterUser: '@4GeeksAcademy',
  unlisted: false,
  translations: {},
  pathConnector: '',
  locales: [],
  publishedTime: '',
  modifiedTime: '',
  keywords: 'programming bootcamp, programming course, professional mentoring',
  card: 'default',
  locale: '',
};

export default Helmet;
