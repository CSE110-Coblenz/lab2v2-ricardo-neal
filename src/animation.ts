import { mainModule, rawListeners } from "process";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(q:string): Promise<string>{
    return new Promise((resolve)=>rl.question(q,resolve));
}

async function main(){

    const answer = await ask("Feature name: ")

    if (answer === 'Music'){
        console.log("\x1b[3mParty! Party! Party! - Music Time \x1b[0m");
    }
    rl.close();
  }

 
main().catch((e) => {
    console.error('e');
    rl.close();
});