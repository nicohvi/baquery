import $ from 'jquery';
import { Bacon as B } from 'baconjs';

$.fn.asEventStream = B.$.asEventStream

module.exports = $;
