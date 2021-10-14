import content from './nested-module/index.js';
import { author } from './exports.js';
import {greetNow} from '../js-modules/greeting.js'
import {whoIsTopper} from '../js-modules/performMath.js'
import {takeInput} from '../js-modules/dynamicImports.js'

window.alert(author);
window.alert(content.message);
greetNow()
whoIsTopper()
takeInput()