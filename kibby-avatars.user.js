// ==UserScript==
// @name         (TEST) Kbin Kibby Avatars
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  Displays a Kibby icon as the default for people with no avatars set.
// @author       minnieo
// @match        https://kbin.social/*
// @icon         https://minnie.untone.uk/kibpfps/kib1.png
// @grant        none
// @run-at       document-idle
// ==/UserScript==

const randomKibby = {
  kib1: 'https://minnie.untone.uk/kibpfps/kib1.png',
  kib2: 'https://minnie.untone.uk/kibpfps/kib2.png',
  kib3: 'https://minnie.untone.uk/kibpfps/kib3.png',
  kib4: 'https://minnie.untone.uk/kibpfps/kib4.png',
  kib5: 'https://minnie.untone.uk/kibpfps/kib5.png',
  kib6: 'https://minnie.untone.uk/kibpfps/kib6.png',
  kib7: 'https://minnie.untone.uk/kibpfps/kib7.png',
  kib8: 'https://minnie.untone.uk/kibpfps/kib8.png',
  kib9: 'https://minnie.untone.uk/kibpfps/kib9.png',
  kib10: 'https://minnie.untone.uk/kibpfps/kib10.png',
  kib11: 'https://minnie.untone.uk/kibpfps/kib11.png',
  kib12: 'https://minnie.untone.uk/kibpfps/kib12.png',
  kib13: 'https://minnie.untone.uk/kibpfps/kib13.png',
  kib14: 'https://minnie.untone.uk/kibpfps/kib14.png',
  kib15: 'https://minnie.untone.uk/kibpfps/kib15.png',
  kib16: 'https://minnie.untone.uk/kibpfps/kib16.png',
  kib17: 'https://minnie.untone.uk/kibpfps/kib17.png',
  kib18: 'https://minnie.untone.uk/kibpfps/kib18.png',
  kib19: 'https://minnie.untone.uk/kibpfps/kib19.png',
  kib20: 'https://minnie.untone.uk/kibpfps/kib20.png',
  kib21: 'https://minnie.untone.uk/kibpfps/kib21.png',
  kib22: 'https://minnie.untone.uk/kibpfps/kib22.png',
  kib23: 'https://minnie.untone.uk/kibpfps/kib23.png',
  kib24: 'https://minnie.untone.uk/kibpfps/kib24.png',
  kib25: 'https://minnie.untone.uk/kibpfps/kib25.png'
};


const commentSection = document.querySelector('section.comments.entry-comments.comments-tree');
const noAvatarElements = Array.from(commentSection.querySelectorAll('div.no-avatar'));

noAvatarElements.forEach(defaultAvatar => {
    const randomIndex = Math.floor(Math.random() * Object.keys(randomKibby).length);
    const assignedAvatar = randomKibby[`kib${randomIndex + 1}`];

    const kibbyAvatar = document.createElement('img');
    kibbyAvatar.alt = 'Default avatar';
    kibbyAvatar.src = assignedAvatar;
    kibbyAvatar.style.cssText = `
        max-width: 40px;
        max-height: 40px;
    `;

    defaultAvatar.parentNode.replaceChild(kibbyAvatar, defaultAvatar);
});

