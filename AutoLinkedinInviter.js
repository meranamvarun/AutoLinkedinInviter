// ==UserScript==
// @name        linkedin_auto_connect
// @namespace   varun
// @description Auto connect to suggested invites
// @include     Auto
// @include     connect
// @include     to
// @include     suggested
// @include     invites
// @version     1
// @grant       none
// ==/UserScript==

people = document.getElementsByClassName("button-secondary-small");

for(person = 0; person < people.length ; person++){

  people[person].click();
}
