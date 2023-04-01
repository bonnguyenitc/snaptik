import { useRouter } from 'next/router';
import en from '../../public/lang/en';
import vi from '../../public/lang/vi';
import br from '../../public/lang/br';
import id from '../../public/lang/id';
import { useMemo } from 'react';

const langs = {
  vi,
  en,
  br,
  ID: id,
};

type LOCALE = keyof typeof langs;

const useTrans = () => {
  const { locale } = useRouter();

  const trans = useMemo(() => langs[(locale as LOCALE) ?? 'en'] || langs.en, [locale]);

  return trans;
};

export default useTrans;
