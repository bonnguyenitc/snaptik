import { Box, HStack, ListItem, OrderedList, Text, UnorderedList, VStack } from '@chakra-ui/react';
import useTrans from '../hooks/useTrans';
import { useThemeColor } from '@/hooks/useThemeColor';
import Layout from '@/components/Layout';
import { openSans } from '@/contants';
import Board from '@/components/Board';

const features = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'];
const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

export default function Home() {
  const { textColor, navBackgroundColor } = useThemeColor();
  const trans = useTrans();

  return (
    <Layout>
      <Board />
      <VStack bg={navBackgroundColor} w="100%" alignItems="flex-start" px="10%" py="5">
        <Text className={openSans.className} fontSize="3xl" fontWeight="700" color={textColor}>
          {trans.home.text1}
        </Text>
        <Text
          className={openSans.className}
          fontSize="16px"
          fontWeight="400"
          color={textColor}
          lineHeight="7"
        >
          {trans.home.text2} <br />
          {trans.home.text3}
        </Text>
        <Box height="16px" />
        <Text className={openSans.className} fontSize="3xl" fontWeight="700" color={textColor}>
          {trans.home.howToUse.title}
        </Text>
        <Box pl="2%">
          <OrderedList color={textColor}>
            {steps.map((step, index) => (
              <ListItem key={index}>
                <Text
                  className={openSans.className}
                  fontSize="18px"
                  fontWeight="600"
                  color={textColor}
                  lineHeight="9"
                >
                  {trans.home.howToUse?.[step]}
                </Text>
              </ListItem>
            ))}
          </OrderedList>
        </Box>
        <Box height="16px" />
        <Text className={openSans.className} fontSize="3xl" fontWeight="700" color={textColor}>
          {trans.home.text4}
        </Text>
        <Box pl="2%">
          <UnorderedList color={textColor}>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <Text
                  className={openSans.className}
                  fontSize="16px"
                  fontWeight="400"
                  color={textColor}
                  lineHeight="7"
                >
                  {trans.home?.[feature]}
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </VStack>
      <HStack
        bg={navBackgroundColor}
        w="100%"
        display="flex"
        alignItems="flex-start"
        px="10%"
        py="16px"
        pb="24px"
      >
        <Text
          className={openSans.className}
          fontSize="16px"
          fontWeight="700"
          color={textColor}
          lineHeight="7"
        >
          {trans.home.note}
        </Text>
        <Text
          className={openSans.className}
          fontSize="16px"
          fontWeight="400"
          color={textColor}
          lineHeight="7"
        >
          {trans.home.noteContent}
        </Text>
      </HStack>
    </Layout>
  );
}
