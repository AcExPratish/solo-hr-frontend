import React from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ReactGroupSelect = ({ ...rest }: StateManagerProps) => {
  // eslint-disable-next-line
  const CustomOption = (props: any) => {
    return (
      <components.Option {...props}>
        <div style={{ marginLeft: props.data.level * 10 }}>
          {props.data.label}
        </div>
      </components.Option>
    );
  };

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon={faAngleDown} className="fs-9 text-body" />
      </components.DropdownIndicator>
    );
  };
  return (
    <div className="react-select-container">
      <Select
        classNamePrefix="react-select"
        components={{ Option: CustomOption, DropdownIndicator }}
        {...rest}
      />
    </div>
  );
};

export default ReactGroupSelect;
