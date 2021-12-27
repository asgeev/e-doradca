import {MDCSelect} from '@material/select';




    const selectDate = new MDCSelect(document.getElementById('selectTime'));
    
    selectDate.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectDate.selectedIndex} with value "${selectDate.value}"`);
    });


export {
    selectDate
}