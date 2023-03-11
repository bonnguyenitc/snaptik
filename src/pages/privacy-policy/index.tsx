/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout';
import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import { Box, Heading, Highlight, Text, VStack } from '@chakra-ui/react';

export default function index() {
  const { navBackgroundColor, textColor } = useThemeColor();
  const trans = useTrans();
  return (
    <Layout title={trans.pravicy.title}>
      <VStack flex={1} bg={navBackgroundColor} alignItems="center">
        <Heading color={textColor}>{trans.pravicy.short}</Heading>
        <Box h="12px" />
        <Box w="80%">
          <Heading fontSize="20px" color={textColor}>
            {trans.pravicy.h1}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.pravicy.d1}
          </Text>
          <Heading fontSize="20px" color={textColor} mt="20px">
            {trans.pravicy.h2}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.pravicy.d2}
          </Text>
          <Heading fontSize="20px" color={textColor} mt="20px">
            {trans.pravicy.h3}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.pravicy.d3}
          </Text>
          <Heading fontSize="20px" color={textColor} mt="20px">
            {trans.pravicy.h4}
          </Heading>
          <Text fontSize="20px" color={textColor} mt="10px" lineHeight="9" textAlign="justify">
            {trans.pravicy.d4}
          </Text>
          <Box h="12px" />
        </Box>
      </VStack>
    </Layout>
  );
}
