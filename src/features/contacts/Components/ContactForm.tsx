import React from 'react';
import { Box } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { InputField, RadioGroupField } from '../../../components/FormFields';
import { Contact } from '../../../models';

export interface ContactFormProps {
  initialValues: Contact | undefined;
}

export default function ContactForm({ initialValues }: ContactFormProps) {
  const { control } = useForm<Contact>({ defaultValues: initialValues });

  return (
    <Box maxWidth={400}>
      <form onSubmit={() => {}}>
        {/* Form Fields */}
        <InputField
          name="id"
          disabled
          control={control}
          label="ID"
          type="string"
        />
        <InputField name="name" control={control} label="Name" />
        <RadioGroupField
          label="Gender"
          name="gender"
          control={control}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />
        <InputField name="age" control={control} label="Age" type="number" />
        <InputField
          name="company"
          control={control}
          label="Company"
          type="string"
        />
        <InputField name="email" control={control} label="Email" type="email" />
      </form>
    </Box>
  );
}
