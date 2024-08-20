import { log } from "console";

function sayHello(name?: string): string {
    name = name ?? "";
    // log(name);
    if (name) {
        return `Hi ${name}`;
    } else {
        return `Hello`;
    }
}

log(sayHello());
