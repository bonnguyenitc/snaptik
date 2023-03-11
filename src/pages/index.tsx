import { Open_Sans } from 'next/font/google';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { MdClear, MdDownload, MdLink } from 'react-icons/md';
import { useCallback, useState } from 'react';
import { BsFillClipboardFill } from 'react-icons/bs';
import useTrans from '../hooks/useTrans';
import { useThemeColor } from '@/hooks/useThemeColor';
import Layout from '@/components/Layout';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});

const features = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'];
const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

export default function Home() {
  const [link, setLink] = useState('');

  const { textColor, bgGradient, navBackgroundColor } = useThemeColor();

  const onDeleteLink = useCallback(() => {
    setLink('');
  }, []);

  const handleChangeLink = useCallback((e: any) => {
    setLink(e.target.value);
  }, []);

  const onPasteClipboard = useCallback(() => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setLink(text);
      })
      .catch((err) => {
        //
      });
  }, []);

  const trans = useTrans();

  return (
    <Layout>
      <VStack py="20" bgGradient={bgGradient}>
        <Heading
          className={openSans.className}
          fontSize="6xl"
          fontWeight="700"
          color="primary.light"
          textAlign="center"
        >
          {trans.home.name}
        </Heading>
        <Heading
          className={openSans.className}
          fontSize="3xl"
          fontWeight="700"
          color="primary.light"
          mb="10px"
          textAlign="center"
        >
          {trans.home.sologon}
        </Heading>
        <Box height="16px" />
        <Center
          w={{
            md: '60%',
            base: '90%',
          }}
          display="flex"
          flexDirection={{
            md: 'row',
            base: 'column',
          }}
        >
          <InputGroup size="lg">
            <InputLeftElement>
              <MdLink color="gray.300" size="30px" />
            </InputLeftElement>
            <Input
              value={link}
              className={openSans.className}
              placeholder="Paste your video link here"
              bg="background.main"
              onChange={handleChangeLink}
              color="primary.dark"
            />
            <InputRightElement width="5rem">
              {!link ? (
                <Button
                  leftIcon={<BsFillClipboardFill />}
                  size="sm"
                  colorScheme="blue"
                  onClick={onPasteClipboard}
                >
                  {trans.home.paste}
                </Button>
              ) : (
                <Button leftIcon={<MdClear />} size="sm" colorScheme="red" onClick={onDeleteLink}>
                  {trans.home.clear}
                </Button>
              )}
              <Box w="8px" />
            </InputRightElement>
          </InputGroup>
          <Box
            w={{
              md: '16px',
              base: '0px',
            }}
            h={{
              base: '16px',
              md: '0px',
            }}
          />
          <Button
            w={{
              base: '100%',
              md: 'auto',
            }}
            colorScheme="green"
            size="lg"
            leftIcon={<MdDownload size="28px" />}
          >
            {trans.home.download}
          </Button>
        </Center>
      </VStack>
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
