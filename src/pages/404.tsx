import Layout from '@/components/Layout';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Heading, Text, VStack } from '@chakra-ui/react';

export default function Custom404() {
  const { textColor, navBackgroundColor } = useThemeColor();
  return (
    <Layout title="NOT FOUND">
      <VStack flex={1} bg={navBackgroundColor} w="100%" alignItems="center" justifyContent="center">
        <Heading color={textColor}>404 | Page Not Found</Heading>
      </VStack>
    </Layout>
  );
}
