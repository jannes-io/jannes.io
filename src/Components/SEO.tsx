import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface IMeta {
  description: string;
  keywords: string;
  author: string;
  image: string | undefined;
}

const defaultMeta: IMeta = {
  description: 'Learn more about web development from a passionate individual. jannes.io is a blog about real life problems and their solutions.',
  keywords: 'PHP, JavaScript, developer',
  author: 'Jannes Drijkoningen',
  image: undefined,
};

export interface ISEOProps {
  title?: string;
  meta?: Partial<IMeta>;
}

export const SEO: React.FC<ISEOProps> = ({ title, meta }) => {
  const router = useRouter();
  const url = `https://jannes.io${router.pathname}`;

  const mergedMeta: Partial<IMeta> = meta === undefined
    ? Object.entries(defaultMeta)
    : Object.fromEntries(Object.entries(defaultMeta)
      .map(([key, entry]) => [key, meta[key as keyof IMeta] || entry])
      .filter(([, entry]) => !!entry)
    );

  const suffixedTitle = title ? `${title} | jannes.io` : 'jannes.io';

  return <>
    <Head>
      {/* Generic */}
      <title>{suffixedTitle}</title>
      {title && <meta name="title" content={title} />}
      {Object.entries(mergedMeta).map(([key, entry]) => <meta
        key={key}
        property={key}
        content={entry || ''}
      />)}

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={suffixedTitle} />
      {mergedMeta.description && <meta property="og:description" content={mergedMeta.description} />}
      {mergedMeta.image && <meta property="og:image" content={`https://jannes.io${mergedMeta.image}`} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={suffixedTitle} />
      {mergedMeta.description && <meta property="twitter:description" content={mergedMeta.description} />}
      {mergedMeta.image && <meta property="twitter:image" content={`https://jannes.io${mergedMeta.image}`} />}
    </Head>
  </>;
};

export default SEO;
