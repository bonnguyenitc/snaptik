import { openSans, REGEX_LINK_TIKTOK } from '@/contants';
import { getIdVideo, getInfoVideo, getUrlRequest } from '@/helper';
import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import {
  Box,
  Button,
  Center,
  Fade,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { BsFillClipboardFill } from 'react-icons/bs';
import { MdClear, MdDownload, MdLink } from 'react-icons/md';

type Props = {};

const Board = (props: Props) => {
  const trans = useTrans();

  const [videoInfo, setVideoInfo] = useState<any>(null);

  const [error, setError] = useState<string | null>(null);

  const [link, setLink] = useState('');

  const [processing, setProcess] = useState('0%');

  const [loading, setLoading] = useState(false);
  const [loadingMp3, setLoadingMp3] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);

  const { bgGradient } = useThemeColor();

  const onDeleteLink = useCallback(() => {
    setLink('');
    setVideoInfo(null);
    setError(null);
  }, []);

  const handleGetInfoVideo = useCallback(async (url: string) => {
    if (REGEX_LINK_TIKTOK.filter((item) => item.test(url)).length === 0) {
      setVideoInfo(null);
      setError('NOT_A_LINK_TIKTOK');
      return;
    }
    setLoadingInfo(true);
    const data = await getInfoVideo(url);
    setLoadingInfo(false);
    if (!data) {
      setError('HAVE_ERROR');
    } else {
      setError(null);
    }
    setVideoInfo(data);
  }, []);

  const handleChangeLink = useCallback(
    (e: any) => {
      setLink(e.target.value);
      if (REGEX_LINK_TIKTOK.filter((item) => item.test(e.target.value)).length > 0) {
        handleGetInfoVideo(e.target.value);
      } else {
        setVideoInfo(null);
      }
    },
    [handleGetInfoVideo],
  );

  const onPasteClipboard = useCallback(() => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setLink(text);
        handleGetInfoVideo(text);
      })
      .catch((_) => {
        //
      });
  }, [handleGetInfoVideo]);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      setProcess('0%');
      setError(null);
      if (REGEX_LINK_TIKTOK.filter((item) => item.test(link)).length > 0) {
        let videoId = null;
        if (videoInfo?.embed_product_id) {
          videoId = videoInfo?.embed_product_id;
        }
        if (!videoId) {
          videoId = getIdVideo(link);
        }
        const url = process.env.NEXT_PUBLIC_DOWNLOAD_URL + videoId + '.mp4';
        const fileName = videoId + '.mp4';
        let blob = null;
        try {
          setLoading(true);
          blob = await getUrlRequest(url, setProcess);
          setLoading(false);
        } catch (_) {
          setLoading(false);
          setError('HAVE_ERROR');
        }
        if (!blob) return setError('HAVE_ERROR');
        const linkA = document.createElement('a');
        linkA.href = window.URL.createObjectURL(blob as any);
        linkA.download = fileName;
        document.body.appendChild(linkA);
        linkA.click();
        document.body.removeChild(linkA);
      } else {
        setError('NOT_A_LINK_TIKTOK');
        setVideoInfo(null);
      }
    },
    [link, videoInfo?.embed_product_id],
  );

  const handleDownloadMp3 = useCallback(async () => {
    // Download
    const videoId = videoInfo?.embed_product_id;
    if (videoId) {
      const url = process.env.NEXT_PUBLIC_DOWNLOAD_MP3_URL + videoId + '.mp3';
      const fileName = videoId + '.mp3';
      let blob = null;
      try {
        setLoadingMp3(true);
        blob = await getUrlRequest(url, () => {
          // no need to
        });
      } catch (_) {
        setLoadingMp3(false);
      }
      if (!blob) return setLoadingMp3(false);
      const linkA = document.createElement('a');
      linkA.href = window.URL.createObjectURL(blob as any);
      linkA.download = fileName;
      document.body.appendChild(linkA);
      linkA.click();
      document.body.removeChild(linkA);
      setLoadingMp3(false);
    }
  }, [videoInfo?.embed_product_id]);

  return (
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
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'center',
        }}
      >
        <Center
          w={{
            lg: '70%',
            base: '100%',
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
              placeholder="https://www.tiktok.com/@user/video/12345"
              bg="background.main"
              onChange={handleChangeLink}
              color="primary.dark"
              required
            />
            <InputRightElement width="auto">
              {!link ? (
                <Button
                  leftIcon={<BsFillClipboardFill />}
                  size="sm"
                  colorScheme="blue"
                  onClick={onPasteClipboard}
                  isLoading={loading}
                  _loading={{
                    opacity: 1,
                  }}
                >
                  {trans.home.paste}
                </Button>
              ) : (
                <Button
                  leftIcon={<MdClear />}
                  size="sm"
                  colorScheme="red"
                  onClick={onDeleteLink}
                  isLoading={loading}
                  _loading={{
                    opacity: 1,
                  }}
                >
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
            isLoading={loading}
            loadingText={processing}
            _loading={{
              opacity: 1,
            }}
            type="submit"
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
      </form>
      {/* {error && (
        <Center width="90%">
          <Text fontSize="18px" fontWeight="700" pt="20px" color="primary.light">
            {{ ...(trans.errors as any) }?.[error]}
          </Text>
        </Center>
      )} */}
      <Box height="0px" />
      {loadingInfo ? (
        <Spinner color="primary.light" size="lg" mt="32px" />
      ) : (
        <Fade
          in={videoInfo}
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {videoInfo && (
            <Box
              display="flex"
              width={{
                base: '90%',
                lg: '50%',
              }}
            >
              <Image src={videoInfo.thumbnail_url} width={'25%'} alt="thumbnail" />
              <Box flex={1} px="20px" flexDirection="column">
                <Text fontSize="16px" color="primary.light">
                  {videoInfo.title}
                </Text>
                <Link href={videoInfo.author_url} target="_blank">
                  <Text
                    fontSize="16px"
                    color="primary.light"
                    fontWeight="700"
                    textDecorationLine="underline"
                  >
                    From {videoInfo.author_name}
                  </Text>
                </Link>
                <Button
                  size="md"
                  mt="18px"
                  colorScheme="green"
                  onClick={handleDownloadMp3}
                  isLoading={loadingMp3}
                  leftIcon={<MdDownload size="28px" />}
                >
                  {trans.home.downloadMp3}
                </Button>
              </Box>
            </Box>
          )}
        </Fade>
      )}
    </VStack>
  );
};

export default Board;
