import Helmet from 'react-helmet'
import React from 'react'

import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TYPE,
  NAME,
  TITLE,
  IMAGE_URL,
} from '../constants'

interface IProps {
  title?: string
  name?: string
  url?: string
}

const SEO: React.FC<IProps> = () => {
  return (
    <>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>{TITLE}</title>
        <meta name="site_name" content={SITE_NAME} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="url" content={window.location.hostname} />
        {/* <!-- Search inside the app should not have the result from google--> */}
        <meta name="google" content="nositelinkssearchbox" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={NAME} />
        <meta itemProp="description" content={SITE_DESCRIPTION} />
        <meta itemProp="image" content={IMAGE_URL} />
        <meta itemProp="url" content={window.location.hostname} />

        {/* <!-- Facebook / PinInterest Meta Tags --> */}
        <meta property="og:url" content={window.location.hostname} />
        <meta property="og:type" content={SITE_TYPE} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={IMAGE_URL} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content={window.location.hostname} />
      </Helmet>
    </>
  )
}

export default SEO
