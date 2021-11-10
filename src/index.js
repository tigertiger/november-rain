import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as State from './js/state.js';
import * as Character from './js/character.js';
import * as NPC from './js/npc.js';

$(document).ready(function() {
  let mainCharStateFunction = State.storeState();
  let currentMobStateFunction;

  $("#character-creation-form").submit(function(e) {
    e.preventDefault();
    const charName = $("#char-name").val();
    mainCharStateFunction(Character.nameChar(charName));
    console.log(mainCharStateFunction());
    showChar();
  });
  
  $("#combat-button").click(function() {
    currentMobStateFunction = NPC.mobArray.find(mobFunction => mobFunction().defeated === false);
    console.log(currentMobStateFunction());
    // showMob();
  })
  
  function showChar() {
    const currentChar = mainCharStateFunction();
    const charDisplayHtml = `<h2>${currentChar.name}</h2><p>HP: ${currentChar.hp}</p><p></p>`
    $("#character").append(charDisplayHtml);
  }
});

