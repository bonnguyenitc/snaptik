import { Open_Sans } from 'next/font/google';

export const LANGUAGES = [
  {
    alias: 'en',
    name: 'English',
  },
  {
    alias: 'vi',
    name: 'Tiếng Việt',
  },
  {
    alias: 'br',
    name: 'Brazil',
  },
  {
    alias: 'ID',
    name: 'Indonesia',
  },
];

export const REGEX_LINK_TIKTOK = [
  /^(https?:\/\/)?(www\.)?(tiktok\.com\/(@\w+\/)?video\/(\d+)|vm\.tiktok\.com\/([\w-]+))$/,
  /^https?:\/\/(?:www\.)?tiktok\.com\/@(?:[\w-]+\.)+[\w-]+\/video\/(\d{19})/,
  /(?:http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/(?:@\w+\/)?video\/\d{19})/,
  /(?:http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/(?:\w{2}\/)?@[\w\.\d-]+\/video\/\d{19})/,
  /(?:http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/v\/\d{19})/,
  /^https?:\/\/(?:www\.)?tiktok\.com\/@[a-zA-Z0-9_.-]+\/video\/(\d{19,99})/,
];

export const REGEX_LINK_DOUYIN =
  /^(https?:\/\/)?(www\.)?(douyin\.com\/(@\w+\/)?\w+\/\w+\/\w+\/\w+\/(\w+)|v\.douyin\.com\/\w+\/\w+\/\w+\/\w+\/(\w+))$/;

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});

export const keywords = [
  // global
  'trending',
  'xuhuong tiktol',
  'xu hướng tiktok',
  'snaptik',
  'check trend tiktok',
  'xu huong viet nam',
  'download video tiktok',
  'download tiktok video',
  'tiktok video downloader',
  'tiktok video download without watermark',
  'tiktok video download for free',
  'download tiktok video without watermark',
  'how to download tiktok video',
  'download video tiktok no logo, no watermark',
  // vietnam
  'tải video tiktok',
  'tai video tiktok',
  'tải video tiktok không logo',
  'tai video tiktok khong logo',
  'tải video tiktok không watermark',
  'tai video tiktok khong watermark',
  // brazil
  'baixar vídeo do tiktok',
  'baixar tiktok',
  "baixar vídeo do tiktok sem marca d'água",
  'baixar vídeo do tiktok grátis',
  'download de vídeo do tiktok',
  "baixar vídeo do tiktok sem logo, sem marca d'água",
  'como baixar vídeo do tiktok',
  "baixar vídeo do tiktok sem logotipo, sem marca d'água",
  // indo
  'unduh video tiktok',
  'pengunduh tiktok',
  'pengunduh video tiktok',
  'unduh video tiktok tanpa watermark',
  'unduh video tiktok secara gratis',
  'unduh video tiktok',
  'unduh video tiktok tanpa watermark',
  'cara mengunduh video tiktok',
  'unduh video tiktok tanpa logo, tanpa watermark',
];
