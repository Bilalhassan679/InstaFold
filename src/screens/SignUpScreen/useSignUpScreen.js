import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFormHook from '../../Hooks/useFormHooks';
import Schemas from '../../utils/Validation';

const useSignUpScreen = () => {
    const {handleSubmit, errors, reset, control, getValues} = useFormHook(
        Schemas.signUp,
      );
  return {handleSubmit, errors, reset, control, getValues}
}

export default useSignUpScreen
