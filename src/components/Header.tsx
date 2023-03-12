import { keywords } from '@/contants';
import useTrans from '@/hooks/useTrans';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
};

const Header = ({ title }: Props) => {
  const trans = useTrans();
  const router = useRouter();
  return (
    <Head>
      <title>{title ?? trans.meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="color-scheme" content="dark light" />
      <meta itemProp="name" content={trans.home.title} />
      <meta name="description" content={trans.meta.description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Admin" />
      <meta property="og:locale" content={router.locale} />
      <meta itemProp="image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/snapthumb.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={trans.meta.twitterTitle} />
      <meta name="twitter:description" content={trans.meta.twitterDescription} />
      <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_DOMAIN}/snapthumb.png`} />
      <meta property="og:title" content={trans.meta.ogTitle} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/snapthumb.png`} />
      <meta property="og:description" content={trans.meta.ogDescription} />
      <meta property="og:site_name" content={trans.meta.ogSiteName} />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/snapthumb.png`}
      />
      <link rel="shortcut icon" href="/favicon.webp" />
      <meta name="google" content="notranslate" />
      <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_DOMAIN} />
      <link rel="alternate" hrefLang="en" href={process.env.NEXT_PUBLIC_DOMAIN} />
      <link rel="alternate" hrefLang="in" href={`${process.env.NEXT_PUBLIC_DOMAIN}/in`} />
      <link rel="alternate" hrefLang="vi" href={`${process.env.NEXT_PUBLIC_DOMAIN}/vn`} />
      <link rel="alternate" hrefLang="tr" href={`${process.env.NEXT_PUBLIC_DOMAIN}/tr`} />
      <link rel="alternate" hrefLang="ID" href={`${process.env.NEXT_PUBLIC_DOMAIN}/ID`} />
      <link rel="alternate" hrefLang="fr" href={`${process.env.NEXT_PUBLIC_DOMAIN}/fr`} />
      <link rel="alternate" hrefLang="pt" href={`${process.env.NEXT_PUBLIC_DOMAIN}/pr`} />
      <link rel="alternate" hrefLang="ru" href={`${process.env.NEXT_PUBLIC_DOMAIN}/ru`} />
      <link rel="alternate" hrefLang="es" href={`${process.env.NEXT_PUBLIC_DOMAIN}/es`} />
      <link rel="alternate" hrefLang="ms" href={`${process.env.NEXT_PUBLIC_DOMAIN}/ms`} />
      <link rel="alternate" hrefLang="ko" href={`${process.env.NEXT_PUBLIC_DOMAIN}/ko`} />
      <link rel="alternate" hrefLang="ja" href={`${process.env.NEXT_PUBLIC_DOMAIN}/ja`} />
      <link rel="alternate" hrefLang="jv" href={`${process.env.NEXT_PUBLIC_DOMAIN}/jv`} />
      <link rel="alternate" hrefLang="cs" href={`${process.env.NEXT_PUBLIC_DOMAIN}/cs`} />
      <link rel="alternate" hrefLang="de" href={`${process.env.NEXT_PUBLIC_DOMAIN}/de`} />
      <link rel="alternate" hrefLang="it" href={`${process.env.NEXT_PUBLIC_DOMAIN}/it`} />
      <link rel="alternate" hrefLang="pl" href={`${process.env.NEXT_PUBLIC_DOMAIN}/pl`} />
      <link rel="alternate" hrefLang="hu" href={`${process.env.NEXT_PUBLIC_DOMAIN}/hu`} />
      <link rel="alternate" hrefLang="nl" href={`${process.env.NEXT_PUBLIC_DOMAIN}/nl`} />
      <link rel="alternate" hrefLang="ro" href={`${process.env.NEXT_PUBLIC_DOMAIN}/ro`} />
      <link rel="alternate" hrefLang="el" href={`${process.env.NEXT_PUBLIC_DOMAIN}/el`} />
      <link rel="alternate" hrefLang="br" href={`${process.env.NEXT_PUBLIC_DOMAIN}/br`} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}/${router.locale}`} />
    </Head>
  );
};

export default Header;
