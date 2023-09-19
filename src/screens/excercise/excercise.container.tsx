import React, { useEffect, useState } from 'react';
import ExcerciseComponent from './excercise.component';
import { useSelector, useDispatch } from 'react-redux';
import { excerciseActions } from '../../sagas/excercise.saga';
import {useNavigation} from '@react-navigation/native';

const ANSWER_PLACE_HOLDER = 'answer_placeholder';
const MAX_QUESTIONS = 5;

const ExcerciseContainer = () => {
  const navigation = useNavigation<any>();
  const [excerciseIndex, setExcerciseIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState<any>();
  const [passExcercise, setPassExcercise] = useState<any>();
  const excerciseSelector = useSelector((st: any) => st.Excercise);
  const dispatch = useDispatch();
  const excerciseData = excerciseSelector?.data;
  const underLineEnglishWord = excerciseData?.questionEn?.split(' ')?.[excerciseData?.answer];
  const questionGe = excerciseData?.questionGe?.split(' ');
  if(questionGe){
    questionGe[excerciseData.answer] = ANSWER_PLACE_HOLDER;
  }

  useEffect(() => {
    if(excerciseIndex <= MAX_QUESTIONS) {
      dispatch(excerciseActions.fetch(excerciseIndex.toString()));
      setSelectedOption(null);
      setPassExcercise(undefined);
    }
  }, [excerciseIndex]);

  const onValidateAnswer = () => {
      setPassExcercise(selectedOption === excerciseData?.questionGe?.split(' ')?.[excerciseData.answer])
  };

  const nextExcercise = () => {
    if(excerciseIndex >= MAX_QUESTIONS){
      navigation.navigate('conclusion')
      return;
    }
    setExcerciseIndex(st => ++st);
  };

  return (
    <ExcerciseComponent 
      questionEn={excerciseData?.questionEn}
      questionGe={questionGe}
      underLineEnglishWord={underLineEnglishWord}
      options={excerciseData?.options}
      onOptionSelect={setSelectedOption}
      selectedOption={selectedOption}
      onValidateAnswer={onValidateAnswer}
      passExcercise={passExcercise}
      answer={excerciseData?.questionGe?.split(' ')?.[excerciseData.answer]}
      nextExcercise={nextExcercise}
    />
  );
};

export default ExcerciseContainer;
