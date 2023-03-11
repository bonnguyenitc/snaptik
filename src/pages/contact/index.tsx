/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout';
import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import { Box, Highlight, Text, VStack } from '@chakra-ui/react';

export default function index() {
  const { navBackgroundColor, textColor } = useThemeColor();
  const trans = useTrans();
  return (
    <Layout title={trans.contact.title}>
      <VStack flex={1} bg={navBackgroundColor} justifyContent="center">
        <Box w="50%">
          <Text fontSize="20px" color={textColor}>
            <Highlight
              query={process.env.NEXT_PUBLIC_CONTACT_MAIL ?? ''}
              styles={{ color: textColor, fontWeight: 'bold', fontSize: '20px' }}
            >
              {trans.contact.description1 + process.env.NEXT_PUBLIC_CONTACT_MAIL}
            </Highlight>
          </Text>
          <Text fontSize="20px" color={textColor} mt="20px" lineHeight="9" textAlign="justify">
            {trans.contact.description2}
          </Text>
        </Box>
      </VStack>
    </Layout>
  );
}
