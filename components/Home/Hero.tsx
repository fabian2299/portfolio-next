import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import pc from '../../public/images/pc.jpg'

export default function Hero() {
  return (
    <section>
      <Box pos="relative" h="md">
        <Box pos="absolute" h="full" w="full" sx={{ filter: 'brightness(.4)' }}>
          <Image
            src={pc}
            placeholder="blur"
            alt="hero"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Center
          pos="relative"
          zIndex="dropdown"
          h="full"
          w="full"
          color="white"
        >
          <VStack spacing="10" pos="relative">
            <Image
              src="/images/perfil.jpeg"
              alt="perfil"
              width={100}
              height={100}
              layout="fixed"
              className="rounded-full"
            />
            <Heading align="center">Succesfull Front-end Development</Heading>
            <Text
              align="center"
              fontSize="xl"
              fontWeight={'semibold'}
              maxW={'container.xl'}
            >
              I write code every day Because I love it!
            </Text>
          </VStack>
        </Center>
      </Box>
    </section>
  )
}
