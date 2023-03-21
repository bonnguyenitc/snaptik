import { openSans } from '@/contants';
import { nFormatter } from '@/helper';
import { Avatar, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  card: any;
};

export const HashTagItem = ({ card }: Props) => {
  return (
    <HStack
      alignItems="center"
      bgGradient="linear(to-r, #6ee2f5, #6454f0)"
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
              color="black"
              wordBreak="break-word"
              whiteSpace="pre-wrap"
            >
              {card.title}
            </Text>
          </Link>
        </HStack>
        <HStack>
          <Text fontWeight="700" color="black">
            {nFormatter(card.extraInfo.views, 1)}
          </Text>
          <Text fontWeight="400" color="black" fontSize="16px">
            views
          </Text>
        </HStack>
        <Text
          className={openSans.className}
          fontWeight="600"
          fontSize="14px"
          color="purple"
          wordBreak="break-word"
          whiteSpace="pre-wrap"
        >
          {card.description}
        </Text>
      </VStack>
    </HStack>
  );
};
