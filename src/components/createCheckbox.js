import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';


    const checkbox_1 = new MDCCheckbox(document.querySelector('.checkbox-1'));

    const formField_1 = new MDCFormField(document.querySelector('#checkbox-1'));

    formField_1.input = checkbox_1;


    const checkbox_2 = new MDCCheckbox(document.querySelector('.checkbox-2'));

    const formField_2 = new MDCFormField(document.querySelector('#checkbox-2'));

    formField_2.input = checkbox_2;




export{
    checkbox_1,
    checkbox_2,
}