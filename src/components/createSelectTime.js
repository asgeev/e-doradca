import {MDCSelect} from '@material/select';




    const selectTime = new MDCSelect(document.getElementById('selectDate'));
    
    selectTime.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectTime.selectedIndex} with value "${selectTime.value}"`);
    });

export{
    selectTime
}