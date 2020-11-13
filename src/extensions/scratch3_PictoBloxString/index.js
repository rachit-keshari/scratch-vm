const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3PictoBloxString {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'pictobloxstring',
            name: 'PictoBloxString',
            blocks: [
                {
                    opcode: 'indexof',
                    blockType: BlockType.COMMAND,
                    text: 'IndexOf [STR1] in [STR2]',
                    arguments: {
                        STR1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'World'
                        },
                        STR2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello World!'
                        }

                    }
                },
                {
                    opcode: 'equals',
                    blockType: BlockType.COMMAND,
                    text: 'Equal string [STR1] to [STR2]',
                    arguments: {
                        STR1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello!'
                        },
                        STR2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello!'
                        }

                    }
                },
            ],
            menus: {
                
            }
        };
    }

    equals (args) {
        
        n = Cast.compare(args.STR1,args.STR2);
        if(n==0)
        res = true;
        else
        res = false;
        log.log(res);
        return res;
    }
    
    indexof (args) {
        n = Cast.toString(args.STR2).indexOf(Cast.toString(args.STR1)); 
        log.log(n);
        return n;
    }
}

module.exports = Scratch3PictoBloxString;
