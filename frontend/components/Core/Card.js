import React from 'react';
import { Card, Heading, Image, Box, Flex } from 'rebass';

const photo = '/static/img/debugging.jpg';

const CardComponent = () => {
  return (
    <Flex>
      <Box alignSelf="center" p={3} width={1 / 2} color="black" bg="primary" flex>
        <Card width={256}>
          <Image src={photo} />
          <Heading fontSize={[4, 5, 6]}>Card</Heading>
        </Card>
      </Box>
    </Flex>
  );
};

export default CardComponent;
