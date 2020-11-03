import React from 'react';
// import { Multiselect } from 'multiselect-react-dropdown';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';



export default function DropDown(props) {
    return (
        <div>
            {/* <Multiselect
                options={this.state.options} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
            /> */}
            <ReactMultiSelectCheckboxes options={props.eventsObject} />
        </div>
    )
}
