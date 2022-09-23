import { PanelContent, React, useDispatch } from "components";
import FormInput from "./form";
import { handleSubmit } from "./redux";

let FormControl = () => {
  const dispatch = useDispatch();
  return (
    <PanelContent headerContent>
      <FormInput onSubmit={(data) => dispatch(handleSubmit(data))} />
    </PanelContent>
  );
};
export default FormControl;
