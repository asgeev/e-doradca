import {MDCSelect} from '@material/select';
import { selectedDepartmentId } from '../index'
``
    const selectDepartment = new MDCSelect(document.getElementById('selectDepartment'));
    
     
    selectDepartment.listen('MDCSelect:change', () => {
    // console.log(`Selected option at index ${selectDepartment.selectedIndex} with value "${selectDepartment.value}"`);
    // let selectedId  = selectDepartment.selectedIndex
    // selectedDepartmentId(selectedId)
        console.log(selectDepartment.selectedIndex)
    });




export{
    selectDepartment,
}