import { Avatar, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import VerifiedIcon from '../assets/verified.svg';
import { nFormatter } from '@/helper';
import { openSans } from '@/contants';

type Props = {
  card: any;
};

export const UserItem = ({ card }: Props) => {
  return (
    <HStack
      alignItems="center"
      bgGradient="linear(to-r, #ffcf50, #ff8818)"
      p="12px"
      borderRadius="16px"
    >
      <Avatar src={card.cover} name={card.title} size="lg" mr="12px" />
      <VStack alignItems="flex-start">
        <HStack>
          <Text className={openSans.className} fontWeight="700" fontSize="20px" color="black">
            {card.title}
          </Text>
          <VerifiedIcon />
        </HStack>
        <Link href={`https://www.tiktok.com/${card.link.replace('/', '')}`} target="_blank">
          <Text className={openSans.className} fontWeight="600" fontSize="14px" color="blue">
            {card.link.replace('/', '')}
          </Text>
        </Link>
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
        <HStack flexWrap="wrap">
          <Text className={openSans.className} fontSize="14px" fontWeight="700" color="black">
            {nFormatter(card.extraInfo.following, 1)}
          </Text>
          <Text className={openSans.className} fontWeight="400" color="black" fontSize="14px">
            Following
          </Text>
          <Text className={openSans.className} fontSize="14px" fontWeight="700">
            {nFormatter(card.extraInfo.fans, 1)}
          </Text>
          <Text className={openSans.className} fontWeight="400" color="black" fontSize="14px">
            Followers
          </Text>
          <Text className={openSans.className} fontSize="14px" fontWeight="700">
            {nFormatter(card.extraInfo.heart, 1)}
          </Text>
          <Text className={openSans.className} fontWeight="400" color="black" fontSize="14px">
            Likes
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
