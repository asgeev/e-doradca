import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

    const checkbox_1 = new MDCCheckbox(document.querySelector('#checkbox-1'));

    const checkbox_2 = new MDCCheckbox(document.querySelector('#checkbox-2'));

    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    
    formField.input = checkbox_1;
    formField.input = checkbox_2;



export{
    checkbox_1,
    checkbox_2,
}