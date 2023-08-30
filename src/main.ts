const developer = 'Developer';

export function hello(who: string = developer) {
  return `Hello, ${who}!`;
}

let result: string = hello();

console.log(result);