"use strict";
const Filter = require('bad-words'), filter = new Filter();
filter.addWords('negr', 'zmrd', 'zmrde', 'mrdko', 'kundo', 'kundy', 'píča', 'píčo', 'hovne', 'mrdka', 'simp', 'virgin', 'panic', 'thot');
function isProfaneCheck(sentence) {
    return filter.isProfane(sentence);
}
;
module.exports = { isProfaneCheck };
