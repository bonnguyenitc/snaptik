import { useThemeColor } from '@/hooks/useThemeColor';
import { HStack, Text } from '@chakra-ui/react';
import { Open_Sans } from 'next/font/google';

type Props = {};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});

const Footer = (props: Props) => {
  const { bgGradient } = useThemeColor();

  return (
    <HStack
      bgGradient={bgGradient}
      w="100%"
      display="flex"
      alignItems="center"
      px="10%"
      justifyContent="center"
      py="5"
    >
      <Text className={openSans.className} fontSize="sm" color="primary.light">
        © 2023 SnapTik1Click. All rights reserved.
      </Text>
    </HStack>
  );
};

export default Footer;
