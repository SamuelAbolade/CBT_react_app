import React, { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useDispatch, useSelector } from 'react-redux'
import { pushToUserAnswers, toggleChoice } from '../Redux/optionSlice'

const QuestionOption = ({ currentQuestionIndex, foundQuestion }) => {
  const options = ['A', 'B', 'C', 'D'];
  const OPTION_DATA = options.map(option => ({
    value: `option${option}`,
    option,
    optionLabel: foundQuestion[option],
    // checked: true,
  }));

  const [value, setValue] = useState('other');
  const dispatch = useDispatch()
  const {optionReducer:{selectedOptions}} = useSelector((state)=>(state))
  console.log(selectedOptions)
  var selectedOption
  const handleChange = (e) => {
    selectedOption = e.target.value
    
    // setValue(event.target.value);
    dispatch(toggleChoice(selectedOption))
    dispatch(pushToUserAnswers(currentQuestionIndex))
  };

  return (
    <FormControl>
      <RadioGroup
        defaultValue="femal"
        name="controlled-radio-buttons-group"
        value={selectedOptions[currentQuestionIndex]}
        onChange={handleChange}
        sx={{ my: 1 }}
      >
        {OPTION_DATA.map(({ value, option, optionLabel}) =>
          <Radio key={value} sx={{ color: 'primary.main' }} value={option} label={optionLabel} />
        )}

      </RadioGroup>
    </FormControl>
  );
}

export default QuestionOption;
