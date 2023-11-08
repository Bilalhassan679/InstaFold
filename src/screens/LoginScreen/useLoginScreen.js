import useFormHook from "../../Hooks/useFormHooks";
import Schemas from "../../utils/Validation";

const useLoginScreen = () => {
    const {handleSubmit, errors, reset, control, getValues} = useFormHook(
        Schemas.signUp,
      );
  return {handleSubmit, errors, reset, control, getValues}
  
}

export default useLoginScreen
