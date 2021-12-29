import {MDCSelect} from '@material/select';




    const selectDate = new MDCSelect(document.getElementById('selectDate'));
    
    selectDate.listen('MDCSelect:change', () => {
        // console.log(`Selected option at index ${selectDate.selectedIndex} with value "${selectDate.value}"`);
        console.log(selectDate.selectedIndex)
    });


export {
    selectDate
}