import {MDCSelect} from '@material/select';
import { renderDate } from '../index'
``
    const selectDepartment = new MDCSelect(document.getElementById('selectDepartment'));
    
    selectDepartment.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectDepartment.selectedIndex} with value "${selectDepartment.value}"`);
        const selectedId  = selectDepartment.selectedIndex
        renderDate(selectedId)
    });


    






export{
    selectDepartment,
}