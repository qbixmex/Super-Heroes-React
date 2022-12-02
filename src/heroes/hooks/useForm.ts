import { ChangeEvent, useState } from 'react';

export function useForm<T>(initialForm: T) {
  const [formData, setFormData] = useState<T>(initialForm);

  const setInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearData = () => {
    setFormData(initialForm);
  };

  return {
    ...formData,
    formData,
    setInputChange,
    clearData,
  };
}