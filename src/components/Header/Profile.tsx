import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Vieira</Text>
          <Text color="gray.300" fontSize="small">felip.3lima@hotmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Felipe Lima" src="https://github.com/felipevlima.png"/>
    </Flex>
  );
}