import React from 'react';
import Screen from '../../components/screen';
import Flex from '../../components/flex';
import Text from '../../components/text';

interface IConclusionComponentProps {
}

// TODO: feature/ show results here
const ConclusionComponent = ({}: IConclusionComponentProps) => {
  return (
    <Screen>
      <Flex fill justify='center' align='center'>
        <Text fontSize={35} weight='700'>THE END ⛳️</Text>
      </Flex>
    </Screen>
  );
};

export default ConclusionComponent;
