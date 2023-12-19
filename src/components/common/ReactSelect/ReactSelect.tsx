import React from 'react';
import { useField, useFormikContext } from 'formik';
import Select from 'react-select';

interface Option {
  label: string;
  value: string | number;
}

interface FormikSelectProps {
  name: string;
  label: string;
  options: Option[];
  isSearchable?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

const ReactSelect: React.FC<FormikSelectProps> = ({
  name,
  label,
  options,
  isSearchable = true,
  isClearable = true,
  isMulti = false,
  className,
  placeholder = 'Select...',
}) => {
  const { setFieldValue } = useFormikContext<any>();
  const [field, meta] = useField(name);

  const handleChange = (selectedOption: Option | readonly Option[] | null) => {
    if (isMulti && Array.isArray(selectedOption)) {
      setFieldValue(
        name,
        selectedOption.map((option) => option.value)
      );
    } else {
      setFieldValue(name, (selectedOption as Option)?.value);
    }
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value?.includes(option.value))
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };

  return (
    <div className={className}>
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <Select
        name={field.name}
        value={getValue()}
        onChange={handleChange}
        options={options}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isMulti={isMulti}
        placeholder={placeholder}
        className={meta.touched && meta.error ? 'is-invalid' : ''}
      />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

export default ReactSelect;
