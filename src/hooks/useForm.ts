import { ChangeEvent, useState } from 'react';

export function useForm<T>(initialForm: T) {
  const [formData, setFormData] = useState<T>(initialForm);

  const setInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    setFormData({
      ...formData,
      [target.name]: (target.name !== 'image')
        ? target.value
        : (target as HTMLInputElement).files![0],
    });
  };

  const clearData = () => {
    setFormData(initialForm);
  };

  return {
    ...formData,
    formData,
    setFormData,
    setInputChange,
    clearData,
  };
}
