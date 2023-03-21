import { openSans } from '@/contants';
import { Avatar, Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  card: any;
};

export const MusicItem = ({ card }: Props) => {
  return (
    <HStack
      alignItems="center"
      bgGradient="linear(to-r, #ff5b94, #8441a4)"
      p="12px"
      borderRadius="16px"
    >
      <Avatar src={card.cover} name={card.title} size="lg" mr="12px" />
      <VStack alignItems="flex-start">
        <HStack>
          <Link href={`https://www.tiktok.com/${card.link.replace('/', '')}`} target="_blank">
            <Text
              className={openSans.className}
              fontWeight="700"
              fontSize="20px"
              color="white"
              wordBreak="break-word"
              whiteSpace="pre-wrap"
            >
              {card.title}
            </Text>
          </Link>
        </HStack>
        <Text
          className={openSans.className}
          fontWeight="600"
          color="white"
          fontSize="16px"
          wordBreak="break-word"
          whiteSpace="pre-wrap"
        >
          {card.subTitle}
        </Text>
        <Text
          className={openSans.className}
          fontWeight="600"
          fontSize="14px"
          color="black"
          wordBreak="break-word"
          whiteSpace="pre-wrap"
        >
          {card.description}
        </Text>
        <Box height="4px" />
        <HStack>
          <audio controls src={card.extraInfo.playUrl} />
        </HStack>
      </VStack>
    </HStack>
  );
};
