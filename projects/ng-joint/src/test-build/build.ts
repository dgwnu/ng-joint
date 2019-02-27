import * as cli from '@angular/cli';

/**
 * Chains Ng Cli Commands to process them sequential
 * @param cmdChain [['cmd1arg1', 'cmd1arg2'], ..., ['cmd(n)arg1',...,  'cmd(n)arg(m)'] ] 
 * @param chainIndex?
 */
export function chainNgCliCmds(cmdChain: string[][], chainIndex?: number) {
    let index = 0;

    if (chainIndex) {
        if (cmdChain.length === chainIndex) { return; }
        index = chainIndex;
    }

    cli.default({ cliArgs: cmdChain[index] })
        .then(() => chainNgCliCmds(cmdChain, index + 1))
        .catch((error) => console.log('chainNgCmds ERROR = ', error));

}


chainNgCliCmds(
[
  ['g', 'ng-joint-schematics:element', 'standard', 'circle', '--project=ng-joint'], 
  ['g', 'ng-joint-schematics:element', 'standard', 'double-link', '--project=ng-joint']
]
);
