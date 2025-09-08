import './request.scss';
import {
  validateForm,
  maskPhone,
} from '../validator/validator';

const requestForm = document.querySelector('.request__form');
if (requestForm) {
  validateForm('.request__form');
  maskPhone('.request__form', '.input-phone');
}
