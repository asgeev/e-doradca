import {MDCSelect} from '@material/select';



const createSelectOddzial = () =>{

    const selectOddzial = new MDCSelect(document.querySelector('.mdc-select'));
    
    selectOddzial.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectOddzial.selectedIndex} with value "${selectOddzial.value}"`);
    });

}


export default createSelectOddzial