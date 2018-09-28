
import * as React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

export class CardHeader extends React.Component {
  render() {
    return (
      <div className='card-header'>
        {this.props.children}
        {this.props.isCollapsed === undefined ? "" :
          <IconButton
            disabled={false}
            checked={true} className={this.props.isCollapsed ? 'ms-slideDownIn10' : 'ms-slideUpIn10'}
            iconProps={{ iconName: this.props.isCollapsed ? 'ChevronDown' : 'ChevronUp' }}
            onClick={() => this.props.changeState(!this.props.isCollapsed)}
          />}
      </div>
    );
  }
}