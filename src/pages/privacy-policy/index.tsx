/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout';
import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import { Box, Heading, Highlight, Text, VStack } from '@chakra-ui/react';

export default function index() {
  const { navBackgroundColor, textColor } = useThemeColor();
  const trans = useTrans();
  return (
    <Layout title={trans.privacy.title}>
      <VStack flex={1} bg={navBackgroundColor} alignItems="center">
        <Box h="32px" />
        <Heading color={textColor}>{trans.privacy.short}</Heading>
        <Box h="12px" />
        <Box w="80%">
          <Heading fontSize="20px" color={textColor}>
            {trans.privacy.h1}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.privacy.d1}
          </Text>
          <Heading fontSize="20px" color={textColor} mt="20px">
            {trans.privacy.h2}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.privacy.d2}
          </Text>
          <Heading fontSize="20px" color={textColor} mt="20px">
            {trans.privacy.h3}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.privacy.d3}
          </Text>
          <Heading fontSize="20px" color={textColor} mt="20px">
            {trans.privacy.h4}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.privacy.d4}
          </Text>
          <Box h="12px" />
        </Box>
      </VStack>
    </Layout>
  );
}
