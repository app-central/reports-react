import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import DropdownTreeSelect from 'react-dropdown-tree-select'




export default function DropDown(props) {
    const addEvent = (list, item) => {
        
            props.addEvent(item);

        
    }
    const removeEvent = (list,item) =>{
        props.removeEvent(item);
    }
    return (
        <div className="dropdown">
            <Multiselect className="drop-down"
                options={props.events} // Options to display in the dropdown
                selectedValues={props.displayedEvents} // Preselected value to persist in dropdown
                onSelect={addEvent} // Function will trigger on select event
                onRemove={removeEvent} // Function will trigger on remove event
                displayValue="label" // Property name to display in the dropdown options
                style={ "max-width:400px" }
                showCheckbox={true}
                isObject={false}
                hidePlaceholder={false} 
            />

        </div>
    )
}
