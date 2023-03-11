import { useRouter } from 'next/router';
import en from '../../public/lang/en';
import vi from '../../public/lang/vn';

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === 'vn' ? vi : en;

  return trans;
};

export default useTrans;
