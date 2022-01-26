import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

    const checkbox_1 = new MDCCheckbox(document.querySelector('#checkbox-1'));

    const checkbox_2 = new MDCCheckbox(document.querySelector('#checkbox-2'));

    const formField1 = new MDCFormField(document.querySelector('#checkbox-1'));

    const formField2 = new MDCFormField(document.querySelector('.mdc-form-field'));

    // const checkbox = new MDCCheckbox(document.querySelectorAll('div.mdc-checkbox'));
    
    formField1.input = checkbox_1;
    formField2.input = checkbox_2;



export{
    checkbox_1,
    // checkbox_2,
}