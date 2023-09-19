import React from 'react';
import Screen from '../../components/screen';
import Text from '../../components/text';
import BottomSheet from '../../components/bottom-sheet';
import Flex from '../../components/flex';
import strings from '../../consts/strings';
import Button from '../../components/button';

const ANSWER_PLACE_HOLDER = 'answer_placeholder';

interface IExcerciseComponentProps {
  questionEn: string,
  questionGe: [],
  underLineEnglishWord: string,
  options: [],
  onOptionSelect: (option: string) => any, 
  selectedOption: string | undefined,
  onValidateAnswer: () => any,
  passExcercise: boolean,
  answer?: string,
  nextExcercise: () => any,
}

const ExcerciseComponent = ({
  questionEn,
  questionGe,
  underLineEnglishWord,
  options,
  onOptionSelect,
  selectedOption,
  onValidateAnswer,
  passExcercise,
  answer,
  nextExcercise,
}: IExcerciseComponentProps) => {
  const renderQuestionGEWord = (word: string) => {
    if(selectedOption && word === ANSWER_PLACE_HOLDER) {
      return (
        <Button key={word} varient={passExcercise ? 'primary' : passExcercise === false ? 'danger' : 'secondary'}>
          <Text color='black' weight='700'>{selectedOption}</Text>
        </Button>
      );
    }
    return (
      <Text key={word} fontSize={24} dottedText>
        {word === ANSWER_PLACE_HOLDER ? '_______' : word}
      </Text>
    );
  }

  return (
    <Screen>
      <Flex fill/>
      <BottomSheet height={85} varient='backgroundL1'>
        <Flex fill padding={30} paddingTop={50} align='center'>
          <Text>{strings.excerciseHeading}</Text>
          <Flex marginTop={40}>
            <Text fontSize={28} underlineSubString={underLineEnglishWord}>
              {questionEn}
            </Text>
          </Flex>
          <Flex marginTop={60} row gap={22} align='center'>
            {
              questionGe?.map?.(renderQuestionGEWord)
            }
          </Flex>
          <Flex marginTop={60} row gap={22} wrap='wrap' align='center' justify='center' marginHorizontal={30}>
            {
              options?.map?.((option: string) => (
                <Button 
                  onPress={() => passExcercise === undefined && onOptionSelect(option)} 
                  key={option} 
                  varient='secondary'
                  skeleton={selectedOption === option}>
                  <Text weight='700' fontSize={14} color='black'>{option}</Text>
                </Button>
              ))
            }
          </Flex>
        </Flex>
        <BottomSheet 
          height={25} 
          varient={passExcercise === true ? 'primary' : 
            passExcercise === false ? 'danger' : 'backgroundL1'}>
          <Flex padding={30} gap={20}>
            {
              passExcercise !== undefined && (
                <Text weight='700' fontSize={18}>
                  {
                    passExcercise ? `⛳️ Great Job!` : `Answer: ${answer}`
                  }
                </Text>
              )
            }
            <Button 
              varient={passExcercise !== undefined ? 'secondary' : selectedOption ? 'primary' : 'default'}
              onPress={passExcercise !== undefined ? nextExcercise : onValidateAnswer}
              disabled={!selectedOption}>
              <Text weight='700' fontSize={15} color={passExcercise !== undefined && 'black'}>
                {(selectedOption && passExcercise === undefined) ? strings.checkAnswerCTA: strings.continueCTA}
              </Text>
            </Button>
          </Flex>
        </BottomSheet>
      </BottomSheet>
    </Screen>
  );
};

export default ExcerciseComponent;
