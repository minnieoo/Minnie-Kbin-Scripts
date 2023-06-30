

    // ==UserScript==
    // @name         Kbin Easy Emoticon
    // @namespace    http://tampermonkey.net/
    // @version      0.6.3
    // @description  easy way to add emoticons to your text with / commands
    // @author       minnieo
    // @match        https://kbin.social/*
    // @match        https://fedia.io/*
    // @match        https://karab.in/*
    // @match        https://www.kbin.cafe/*
    // @icon         https://upload.wikimedia.org/wikipedia/commons/2/24/Lenny_face.png
    // @grant        none
    // @license      GNU GPLv3
    // ==/UserScript==
     
    // thanks for using!! ❤︎
     
    (function() {
        'use strict';
     
         
    let eventListener;
     
    const emoticons = {
        '/shrug': '¯\\\\_(ツ)\\_/¯',
        '/lenny': '( ͡° ͜ʖ ͡°)',
        '/lenshrug': '¯\\_( ͡° ͜ʖ ͡°)_/¯',
        '/flipoff': '( ͡° ͜ʖ ͡°)╭∩╮',
        '/lenwink': '( ͡~ ͜ʖ ͡°)',
        '/welp': 'ツ',
        '/lensexy': '(͠≖ ͜ʖ͠≖)',
        '/tableflip': '(╯°□°)╯︵ ┻━┻',
        '/tableback': '┬─┬ノ( º _ ºノ)',
        '/bear': 'ʕ •ᴥ•ʔ',
        '/1bear': 'ʕっ• ᴥ • ʔっ',
        '/3hearteyes': '(♡ヮ♡)',
        '/happy': '╰(´꒳`)╯',
        '/rawr': '૮ ˙Ⱉ˙ ა',
        '/blush': '( ⸝⸝´꒳`⸝⸝)',
        '/1blush': '(o/////o " )',
        '/2blush': '⁄(⁄ ⁄•⁄-⁄•⁄ ⁄)⁄',
        '/1happy': '( ˶ˆ꒳ˆ˵ )',
        '/3blush': '(⸝⸝⸝• ω •⸝⸝⸝) ♡',
        '/smirk': '(   ͡º ꒳ ͡º)',
        '/givelove': '(˘︶˘).｡.:*♡',
        '/kiss': '( ˘ ³˘)♥',
        '/frown': '(  •̀ - •́  )',
        '/wink': '(˵ •̀ ᴗ - ˵ ) ✧',
        '/awesome': '৻(  •̀ ᗜ •́  ৻)',
        '/tough': 'ᕙ( •̀ ᗜ •́ )ᕗ',
        '/pleased': '(ㅅ´ ˘ `)',
        '/cry': '(╥﹏╥)',
        '/bummed': '( • ᴖ • ｡ )',
        '/wave': '◝(ᵔᵕᵔ)◜',
        '/decor': '♡⟡˙⋆',
        '/2decor': ' ⋆˙⟡♡',
        '/heart': '❤︎',
        '/1heart': '♡',
        '/star': '★',
        '/flower': '✿',
        '/concern': '(｡•́︿•̀｡)',
        '/4blush': '(⸝⸝ᵕᴗᵕ⸝⸝)',
        '/3happy': '(ﾉ^ヮ^)ﾉ',
        '/4happy': 'ᐠ( ᐛ )ᐟ',
        '/unhappy': '(¬_¬")',
        'comfort': '( ´･･)ﾉ(._.`)',
        '/look': 'ಠ_ಠ',
        '/5happy': 'ᕕ( ᐛ )ᕗ',
        '/depress': '(◞‸◟）',
        '/shy': '( っ- ‸ - c)',
        '/bash': '(/▽＼)',
        '/lenblush': '( ͡°⁄ ⁄ ͜⁄ ⁄ʖ ⁄ ⁄ ͡°)',
        '/heh': '╮（￣▽￣）╭',
        '/energy': '༼ つ ◕_◕ ༽つ',
        '/1welp': '(งツ)ว',
        '/plead': '( •̯́ ^ •̯̀)',
        '/glad': '✧⁺⸜(●′▾‵●)⸝⁺✧',
        '/stoic': '( ་ ⍸ ་ )',
        '/cheer': '✽-(ˆ▽ˆ)/✽ ✽\\(ˆ▽ˆ)-✽',
        '/rush': '(•⌓• )⁼³₌₃',
        '/um': '(•-• )',
        '/evil': '(¬‿¬)',
        '/sparkles': '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
        '/blank': '(。。\\)',
        '/sus': '눈_눈',
        '/2heh': '(￣▽￣)"',
        '/smug': '( ￢ω￢)',
        '/3welp': '╮(╯-╰)╭',
        '/nunnun': '(๑╹ᆺ╹)',
        '/squint': '(≖_≖ )',
        '/donger': 'ヽ༼ຈل͜ຈ༽ﾉ',
        '/2donger': 'ヽ༼° ل͜ °༽ﾉ',
        '/3donger': 'ヽ༼⊙ل͜⊙༽ﾉ',
        '/4donger': 'ヽ༼≖ل͜≖༽ﾉ',
        '/5donger': 'ヽ༼ ・ ل͜ ・ ༽ﾉ',
        '/6donger': 'ヽ༼◉ل͜◉༽ﾉ',
        '/7donger': 'ヽ༼ ºلº ༽ﾉ',
        '/hmpf': '(︶^︶)',
        '/2awesome': '(◉ω◉)',
        '/2blank': '(・へ・)',
        '/3blank': '(　´_ゝ`)',
        '/4blank': "'ㅅ'",
        '/5blank': '(_ _;)',
        '/2um': '(⚆_⚆)',
        '/2cheer': '( ´▽`）o自自o（´▽` ）',
        '/patpat': '(　´▽`)ﾉ(´･ω･`)',
        '/dance': '♪┏(・o･)┛♪',
        '/why': 'щ(ﾟДﾟщ)',
        '/6blank': '( ﾟヮﾟ)...'
    };
     
    function emoticonGen() {
        eventListener = (e) => {
            if (e.target.tagName === 'TEXTAREA') {
                emoticonMake(e.target);
                console.log('working');
            }
        };
        document.addEventListener('input', eventListener)
    }
     
     
    function emoticonMake(param) {
        let text = param.value;
     
        for (const [command, emoticon] of Object.entries(emoticons)) {
            text = text.replace(new RegExp(command, 'g'), `${emoticon} `);
        }
     
        param.value = text;
    }
     
    emoticonGen();
     
    })();

