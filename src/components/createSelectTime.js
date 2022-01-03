import {MDCSelect} from '@material/select';




    const selectTime = new MDCSelect(document.getElementById('selectTime'));
    

    selectTime.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectTime.selectedIndex} with value "${selectTime.value}"`);
      });

    

export{
    selectTime
}