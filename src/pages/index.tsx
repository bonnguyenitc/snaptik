import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
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
        <Heading className={openSans.className} color={textColor}>
          {trans.home.text1}
        </Heading>
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
        <Heading className={openSans.className} color={textColor}>
          {trans.home.howToUse.title}
        </Heading>
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
        <Heading className={openSans.className} color={textColor}>
          {trans.home.text4}
        </Heading>
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
        <Box w="100%" pt="20px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading className={openSans.className} color={textColor}>
                    {trans.questions.q1}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a11}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a12}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a13}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a14}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a15}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a16}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a17}
                    </Text>
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading className={openSans.className} color={textColor}>
                    {trans.questions.q2}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a21}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a22}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a23}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      className={openSans.className}
                      fontSize="18px"
                      fontWeight="500"
                      color={textColor}
                    >
                      {trans.questions.a24}
                    </Text>
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
