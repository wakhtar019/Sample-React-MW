import * as React from 'react';
import { PropTypes } from 'prop-types';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
    DetailsList,
    DetailsListLayoutMode,
    Selection,
    SelectionMode,
    IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import { ScrollablePane } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import './AutoComplete.css';
import Debounce from 'lodash.debounce';

const propTypes = {
    records: PropTypes.array,
    onSearch: PropTypes.func,
}

let _items = [];

export class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        const _columns = [
            {
                key: 'column1',
                name: 'name',
                fieldName: 'name',
                onColumnClick: this._onColumnClick,
            },

        ];

        this._selection = new Selection({
            onSelectionChanged: () => {
                this._getSelectionDetails();
            }
        });

        this.state = {
            items: [],
            columns: _columns,
            searchText: '',
            processing: false
        };

        this.lazySearch = Debounce(this._onChangeText, 300, true);    
    }

    render() {
        const { columns, items, searchText } = this.state;
        return (
            <div className='autocomplete'>
                <TextField value={searchText} placeholder='Start typing to search.' label="Filter by name:" onChange={this._onChangeText} />
                {this.state.processing ? <Spinner size={SpinnerSize.xSmall} /> : null}
                <TextField value={searchText} label="Filter by name:" onChange={this.lazySearch} />
                {items && items.length > 0 ?
                    <div className='autocomplete-details'>
                        <ScrollablePane>
                            <DetailsList
                                items={items}
                                compact={true}
                                columns={columns}
                                selectionMode={SelectionMode.none}
                                setKey="set"
                                layoutMode={DetailsListLayoutMode.justified}
                                isHeaderVisible={false}
                                selection={this._selection}
                                selectionPreservedOnEmptyClick={true}
                                onItemInvoked={this._onItemInvoked}
                                enterModalSelectionOnTouch={true}
                            />
                        </ScrollablePane>
                    </div> : null}
            </div>
        );
    }

    _onChangeText = (ev, text) => {
        if (this.props.onSearch) {
            if(text) {
                this.setState({ processing: true, searchText: text });
                var _this = this;
                var promise = new Promise(function(resolve, reject) {
                    _this.props.onSearch(text, resolve, reject);
                });
                promise.then((data) => { 
                    this.setState({ processing: false, items: data, searchText: text})
                });
            }
            else {
                this.setState({ processing: false, items: [], searchText: text})
            }
        }
        else {
            this.setState({ items: text ? this.props.records.filter(i => i.name.toLowerCase().indexOf(text.toLowerCase()) > -1) : [], searchText: text });
        }
    };

    _onItemInvoked(item) {
        alert(`Item invoked: ${item.name}`);
    }

    _getSelectionDetails() {
        const selectionCount = this._selection.getSelectedCount();

        if (selectionCount === 1) {
            var text = (this._selection.getSelection()[0]).name;
            this.setState({
                items: text ? _items.filter(i => i.name.toLowerCase().indexOf(text) > -1) : _items,
                searchText: text,
            });
            return text;
        }
        else {
            return '';
        }
    }

    _onColumnClick = (ev, column) => {
        const { columns, items } = this.state;
        let newItems = items.slice();
        const newColumns = columns.slice();
        const currColumn = newColumns.filter((currCol, idx) => {
            return column.key === currCol.key;
        })[0];
        newColumns.forEach((newCol) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        newItems = this._sortItems(newItems, currColumn.fieldName || '', currColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            items: newItems
        });
    };

    _sortItems = (items, sortBy, descending = false) => {
        if (descending) {
            return items.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return 1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return -1;
                }
                return 0;
            });
        } else {
            return items.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
                return 0;
            });
        }
    };
}

AutoComplete.propTypes = propTypes;