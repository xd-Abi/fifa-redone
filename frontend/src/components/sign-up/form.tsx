import React, { useState } from "react";
import { User } from "@/lib/models";
import SignUpUsernameStep from "./steps/username-step";
import SignUpEmailStep from "./steps/email-step";
import SignUpPersonalStep from "./steps/personal-step";
import SignUpPasswordStep from "./steps/password-step";

enum SignUpWorkflowStep {
  Username,
  Email,
  Personal,
  Password,
}

export type SignUpFormType = User & {
  password: string;
};

type Props = {
  onSubmit: (data: SignUpFormType) => void;
};

const SignUpForm = ({ onSubmit }: Props) => {
  const [currentStep, setCurrentStep] = useState(SignUpWorkflowStep.Username);
  const [formData, setFormData] = useState<SignUpFormType>(
    {} as SignUpFormType
  );

  return (
    <React.Fragment>
      {currentStep === SignUpWorkflowStep.Username && (
        <SignUpUsernameStep
          initialValues={{ ...formData }}
          onSubmit={(data) => {
            setFormData({ ...formData, username: data.username });
            setCurrentStep(SignUpWorkflowStep.Email);
          }}
        />
      )}
      {currentStep === SignUpWorkflowStep.Email && (
        <SignUpEmailStep
          initialValues={{ ...formData }}
          onBack={(data) => {
            setFormData({ ...formData, email: data.email });
            setCurrentStep(SignUpWorkflowStep.Username);
          }}
          onSubmit={(data) => {
            setFormData({ ...formData, email: data.email });
            setCurrentStep(SignUpWorkflowStep.Personal);
          }}
        />
      )}
      {currentStep === SignUpWorkflowStep.Personal && (
        <SignUpPersonalStep
          initialValues={{ ...formData }}
          onBack={(data) => {
            setFormData({
              ...formData,
              firstname: data.firstname,
              lastname: data.lastname,
              gender: data.gender,
              birthdate: data.birthdate,
            });
            setCurrentStep(SignUpWorkflowStep.Email);
          }}
          onSubmit={(data) => {
            setFormData({
              ...formData,
              firstname: data.firstname,
              lastname: data.lastname,
              gender: data.gender,
              birthdate: data.birthdate,
            });
            setCurrentStep(SignUpWorkflowStep.Password);
          }}
        />
      )}
      {currentStep === SignUpWorkflowStep.Password && (
        <SignUpPasswordStep
          initialValues={{
            ...formData,
          }}
          onBack={() => {
            setCurrentStep(SignUpWorkflowStep.Personal);
          }}
          onSubmit={(data) => {
            onSubmit({ ...formData, password: data.password });
          }}
        />
      )}
    </React.Fragment>
  );
};

export default SignUpForm;
