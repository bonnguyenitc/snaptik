/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout';
import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import { Box, Heading, Highlight, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';

export default function index() {
  const { navBackgroundColor, textColor } = useThemeColor();
  const trans = useTrans();
  return (
    <Layout title={trans.terms.title}>
      <VStack flex={1} bg={navBackgroundColor} alignItems="center">
        <Heading color={textColor}>{trans.terms.short}</Heading>
        <Box h="12px" />
        <Box w="80%">
          <Heading fontSize="20px" color={textColor}>
            {trans.terms.h1}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="10px" lineHeight="7" textAlign="justify">
            {trans.terms.d1}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor}>
            {trans.terms.h2}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d21}
          </Text>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d22}
          </Text>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d23}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor}>
            {trans.terms.h3}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d31}
          </Text>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d32}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor}>
            {trans.terms.h4}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d41}
          </Text>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d42}
          </Text>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d43}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor}>
            {trans.terms.h5}
          </Heading>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h51}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d5}
          </Text>
          <UnorderedList>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d5l1}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d5l2}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d5l3}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d5l4}
              </Text>
            </ListItem>
          </UnorderedList>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h52}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d51}
          </Text>
          <UnorderedList>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l1}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l2}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l3}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l4}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l5}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l6}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d52l7}
              </Text>
            </ListItem>
          </UnorderedList>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h53}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d53}
          </Text>
          <UnorderedList>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d53l1}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d53l2}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d53l3}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
                {trans.terms.d53l4}
              </Text>
            </ListItem>
          </UnorderedList>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h54}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d54}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h6}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d6}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h7}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d7}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h8}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d8}
          </Text>
          <Box h="12px" />
          <Heading fontSize="20px" color={textColor} mt="4px">
            {trans.terms.h9}
          </Heading>
          <Text fontSize="18px" color={textColor} mt="4px" lineHeight="7" textAlign="justify">
            {trans.terms.d9}
          </Text>
          <Box h="12px" />
        </Box>
      </VStack>
    </Layout>
  );
}
