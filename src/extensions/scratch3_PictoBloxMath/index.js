const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3PictoBloxMath {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'pictobloxmath',
            name: 'PictoBloxMath',
            blocks: [
                {
                    opcode: 'square',
                    blockType: BlockType.COMMAND,
                    text: 'Square block [NUM]',
                    arguments: {
                        NUM: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'squareroot',
                    blockType: BlockType.COMMAND,
                    text: 'Square root [NUM]',
                    arguments: {
                        NUM: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
            ],
            menus: {
                
            }
        };
    }

    square (args) {
        n = Cast.toNumber(args.NUM) * Cast.toNumber(args.NUM);
        log.log(n);
        return n;
    }
    
    squareroot (args) {
        
        if(Cast.toNumber(args.NUM) >= 0)
        {
           n = Math.sqrt(Cast.toNumber(args.NUM));
        }
        else
        {
           n = Math.sqrt(-Cast.toNumber(args.NUM)); 
        }  
        log.log(n);
        return n;
    }
}

module.exports = Scratch3PictoBloxMath;
