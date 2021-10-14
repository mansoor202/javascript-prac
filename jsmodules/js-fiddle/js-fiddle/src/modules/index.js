import content from './nested-module/index.js';
import { author } from './exports.js';
import {greetNow} from '../js-modules/greeting.js'

window.alert(author);
window.alert(content.message);
greetNow()
