import React, { HTMLInputTypeAttribute } from "react";
import {
  FormElement,
  Input as NextInput,
  Spacer,
  Text,
} from "@nextui-org/react";

type Props = {
  id?: string;
  placeholder: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: ((e: React.ChangeEvent<FormElement>) => void) | undefined;
  onBlur?: ((e: React.FocusEvent<FormElement, Element>) => void) | undefined;
};

const Input = ({
  id,
  placeholder,
  error,
  type,
  value,
  onChange,
  onBlur,
}: Props) => {
  return (
    <React.Fragment>
      <NextInput
        id={id}
        aria-label={id}
        placeholder={placeholder}
        css={{ w: "100%" }}
        color={error ? "error" : "default"}
        bordered
        size="lg"
        type={type}
        value={value ?? ""}
        onChange={onChange}
        onBlur={onBlur}
      />

      <Spacer y={0.5} />
      <Text color="error">{error}</Text>
    </React.Fragment>
  );
};

export default Input;
