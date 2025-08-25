import React from 'react';
import Select, {
  components,
  DropdownIndicatorProps,
  StylesConfig
} from 'react-select';
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

  const customStyles: StylesConfig = {
    control: (base, state) => ({
      ...base,
      padding: 11.5,
      backgroundColor: state.isDisabled
        ? 'rgba(239, 242, 246, 1) !important'
        : 'white'
    })
  };

  return (
    <div className="react-select-container">
      <Select
        classNamePrefix="react-select"
        components={{ Option: CustomOption, DropdownIndicator }}
        styles={customStyles}
        {...rest}
      />
    </div>
  );
};

export default ReactGroupSelect;
