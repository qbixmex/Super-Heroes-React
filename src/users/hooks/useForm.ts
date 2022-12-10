import { ChangeEvent, useState } from 'react';

export function useForm<T>(initialForm: T) {
  const options = [
    { value: '', text: 'Select a Role' },
    { value: 'admin', text: 'Admin' },
    { value: 'regular', text: 'Regular' },
  ];

  const [formData, setFormData] = useState<T>(initialForm);

  const setInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    options,
    setFormData,
    setInputChange,
    clearData,
  };
}
