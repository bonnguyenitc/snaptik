import Layout from '@/components/Layout';
import { openSans } from '@/contants';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Box, Text, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {};

const Trending = (props: Props) => {
  const { textColor, navBackgroundColor } = useThemeColor();

  const [data, setData] = useState('');

  const getDataTrending = useCallback(async () => {
    try {
      var myHeaders = new Headers();

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch('https://www.tiktok.com/node/share/discover', requestOptions as any)
        .then((response) => response.text())
        .then((result) => setData(result))
        .catch((error) => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getDataTrending();
  }, [getDataTrending]);

  return (
    <Layout>
      <VStack
        flex={1}
        bg={navBackgroundColor}
        w="100%"
        alignItems="flex-start"
        px="10%"
        py="5"
        pt="3%"
      >
        <Text
          className={openSans.className}
          fontSize="32px"
          fontWeight="700"
          color={textColor}
          lineHeight="7"
        >
          Video Trending
        </Text>
        <Box flex={1}>{data}</Box>
      </VStack>
    </Layout>
  );
};

export default Trending;
