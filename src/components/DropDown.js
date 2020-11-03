import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { render } from "react-dom";

import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import DropdownTreeSelect from 'react-dropdown-tree-select'




export default function DropDown(props) {
    return (
        <div className="dropdown">
            <Multiselect className="drop-down"
                options={props.events} // Options to display in the dropdown
                selectedValues={props.displayedEvents} // Preselected value to persist in dropdown
                // onSelect={this.onSelect} // Function will trigger on select event
                // onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="label" // Property name to display in the dropdown options
                style={ "max-width:400px" }
                showCheckbox={true}
                isObject={false}
                hidePlaceholder={false} 
            />
            {/* <ReactMultiSelectCheckboxes options={props.events} isObject={false} /> */}

        </div>
    )
}
