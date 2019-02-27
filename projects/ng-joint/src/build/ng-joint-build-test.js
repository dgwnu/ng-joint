"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli = require("@angular/cli");
/**
 * Chains Ng Cli Commands to process them sequential
 * @param cmdChain [['cmd1arg1', 'cmd1arg2'], ..., ['cmd(n)arg1',...,  'cmd(n)arg(m)'] ]
 * @param chainIndex?
 */
function chainNgCliCmds(cmdChain, chainIndex) {
    let index = 0;
    if (chainIndex) {
        if (cmdChain.length === chainIndex) {
            return;
        }
        index = chainIndex;
    }
    cli.default({ cliArgs: cmdChain[index] })
        .then(() => chainNgCliCmds(cmdChain, index + 1))
        .catch((error) => console.log('chainNgCmds ERROR = ', error));
}
exports.chainNgCliCmds = chainNgCliCmds;
chainNgCliCmds([
    ['g', 'ng-joint-schematics:element', 'standard', 'circle', '--project=ng-joint'],
    ['g', 'ng-joint-schematics:element', 'standard', 'double-link', '--project=ng-joint']
]);
