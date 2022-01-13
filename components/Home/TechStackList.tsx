import {
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiReact,
  SiGraphql,
  SiRedux,
  SiExpress,
} from 'react-icons/si'
import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

export default function TechStackList() {
  return (
    <Box mt="10" bgColor="white">
      <Heading color="green.800" align="center">
        Tech Stack
      </Heading>

      <SimpleGrid columns={[2, 4]} gap="10" p="10">
        <VStack>
          <SiTypescript className="w-20 h-20" />
          <Text>TypeScript</Text>
        </VStack>

        <VStack>
          <SiNextdotjs className="w-20 h-20" />
          <Text>Next.js</Text>
        </VStack>

        <VStack>
          <SiChakraui className="w-20 h-20" />
          <Text>ChakraUI</Text>
        </VStack>

        <VStack>
          <SiTailwindcss className="w-20 h-20" />
          <Text>TailwindCSS</Text>
        </VStack>

        <VStack>
          <SiReact className="w-20 h-20" />
          <Text>React.js</Text>
        </VStack>

        <VStack>
          <SiGraphql className="w-20 h-20" />
          <Text>Graphql</Text>
        </VStack>

        <VStack>
          <SiRedux className="w-20 h-20" />
          <Text>Redux-Toolkit</Text>
        </VStack>

        <VStack>
          <SiExpress className="w-20 h-20" />
          <Text>Express</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  )
}
