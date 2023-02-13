import './scss/styles.scss'
import { openMenu, buttonToOpen } from './js/header'
import line1 from '../src/img/first_section/rectangle1.png'
import line2 from '../src/img/first_section/rectangle2.png'

const one = document.querySelector('.one');
one.src = line1;
const two = document.querySelector('.two');
two.src = line2;
const three = document.querySelector('.three');
three.src = line2;



buttonToOpen.addEventListener("click", openMenu)
