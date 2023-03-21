import Layout from '@/components/Layout';
import { openSans } from '@/contants';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Box, List, ListItem, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { MusicItem } from '@/components/MusicItem';
import { HashTagItem } from '@/components/HashTagItem';
import { UserItem } from '@/components/UserItem';
import useTrans from '@/hooks/useTrans';

type Props = {};

type Cards = {
  exploreList: CardItem[];
  pageState: any;
};

type CardItem = {
  cardItem: {
    cover: string;
    description: string;
    extraInfo: {
      verified: boolean;
      userId: string;
      likes: number;
      heart: number;
      fans: number;
      following: number;
      views: number;
      playUrl: string;
    };
    id: string;
    link: string;
    subTitle: string;
    title: string;
  };
};

const Trending = (props: Props) => {
  const { textColor, navBackgroundColor } = useThemeColor();

  const [data, setData] = useState<Cards[]>([]);

  const [loading, setLoading] = useState(false);

  const getDataTrending = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetch('/api/trending', {
        method: 'GET',
      });
      const dataJson = await data.json();
      setLoading(false);
      setData(dataJson?.data);
    } catch (_) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDataTrending();
  }, [getDataTrending]);

  const trans = useTrans();

  return (
    <Layout title={trans.trending.title}>
      <VStack
        flex={1}
        bg={navBackgroundColor}
        w="100%"
        alignItems="flex-start"
        px={{
          base: '5%',
          lg: '10%',
        }}
        pt="5%"
      >
        <Text
          className={openSans.className}
          fontSize="32px"
          fontWeight="700"
          color={textColor}
          mb="24px"
        >
          Trending in {data?.[0]?.pageState?.region}
        </Text>
        <Tabs variant="soft-rounded" colorScheme="messenger" isLazy width="100%">
          <TabList>
            <Tab className={openSans.className} fontWeight="700" fontSize="xl" color={textColor}>
              User
            </Tab>
            <Tab className={openSans.className} fontWeight="700" fontSize="xl" color={textColor}>
              #HashTag
            </Tab>
            <Tab className={openSans.className} fontWeight="700" fontSize="xl" color={textColor}>
              Music
            </Tab>
          </TabList>
          {loading ? (
            <VStack height="100%" justifyContent="center">
              <Spinner />
            </VStack>
          ) : (
            <TabPanels>
              <TabPanel>
                <List mt="20px">
                  {data?.[0]?.exploreList.map((item, index) => {
                    const card = item.cardItem;
                    return (
                      <ListItem key={card.id}>
                        <UserItem card={card} />
                        <Box height="12px" />
                      </ListItem>
                    );
                  })}
                </List>
              </TabPanel>
              <TabPanel>
                <List mt="20px">
                  {data?.[1]?.exploreList.map((item, index) => {
                    const card = item.cardItem;
                    return (
                      <ListItem key={card.id}>
                        <HashTagItem card={card} />
                        <Box height="12px" />
                      </ListItem>
                    );
                  })}
                </List>
              </TabPanel>
              <TabPanel>
                <List mt="20px">
                  {data?.[2]?.exploreList.map((item) => {
                    const card = item.cardItem;
                    return (
                      <ListItem key={card.id}>
                        <MusicItem card={card} />
                        <Box height="12px" />
                      </ListItem>
                    );
                  })}
                </List>
              </TabPanel>
            </TabPanels>
          )}
        </Tabs>
      </VStack>
    </Layout>
  );
};

export default Trending;
