const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3Square {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'square',
            name: 'Square',
            blocks: [
                {
                    opcode: 'square',
                    blockType: BlockType.COMMAND,
                    text: 'Square [NUM]',
                    arguments: {
                        NUM: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                }
            ],
            menus: {
                
            }
        };
    }

    square (args) {
        const n = Cast.toNumber(args.NUM)*Cast.toNumber(args.NUM);
        log.log(n);
        return n;
    }
}

module.exports = Scratch3Square;
