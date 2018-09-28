import * as React from 'react';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { PropTypes } from 'prop-types';
import './OptionsButton.css';

const propTypes = {
    selectedKey: PropTypes.string,
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export class OptionsButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelection = this.changeSelection.bind(this);
    this.state = { selectedKey: this.props.selectedKey };
  }

  changeSelection(selectedKey) {
    this.setState({selectedKey: selectedKey});
    this.props.onSelect(selectedKey);
  }

  render(){
    const { options } = this.props;
    var selectedKey = this.state.selectedKey;
    var _this = this;
    return (
      <div>
        {options.map(function(option, index) {
            return <CommandBarButton className='OptionButton'
            key={option.key}
            data-automation-id={option.key}
            disabled={false}
            checked={option.key === selectedKey}
            iconProps={{ iconName: option.key === selectedKey ? 'Accept' : '' }}
            text={ option.text }
            onClick={() => _this.changeSelection(option.key) }
          />
        })
        }
      </div>
    );
  }
}

OptionsButton.propTypes = propTypes;
