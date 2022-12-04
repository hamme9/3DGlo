import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";
import maskPhone from "./modules/maskPhone";

timer('12 december 2022');
menu();
modal();
validation();
tabs();
slider();
calc(100);
maskPhone('[name="user_phone"]');
sendForm({
    formId: 'form1',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});
sendForm({
    formId: 'form2',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});
sendForm({
    formId: 'form3',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});

