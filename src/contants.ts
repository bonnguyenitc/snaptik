import { Open_Sans } from 'next/font/google';

export const LANGUAGES = [
  {
    alias: 'vi',
    name: 'Tiếng Việt',
  },
  {
    alias: 'en',
    name: 'English',
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
  'tiktok',
  'snaptik',
  'ssstik',
  'download video tiktok',
  'download music tiktok',
  'download tiktok video',
  'tiktok downloader',
  'download tiktok video without watermark',
  'download videos from tiktok',
  'save tiktok videos',
  // vietnam
  'tải video tiktok',
  'tai video tiktok',
];
