//Basics
import React, { useState } from "react";

import { Input, Placeholder, Wrapper} from "./inputMaterial.styles";

const InputMaterial = ({grid}) => {
  return (
    <Wrapper grid>
      <Input type="text" />
      <Placeholder>Name</Placeholder>
    </Wrapper>
  );
};


export default InputMaterial;