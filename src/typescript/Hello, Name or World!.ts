/**
     * Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or (or passed as an empty String).

    Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

    Examples:
        hello "john"   => "Hello, John!"
        hello "aliCE"  => "Hello, Alice!"
        hello          => "Hello, World!" # name not given
        hello ''       => "Hello, World!" # name is an empty String

*/

const nameHandle = (name: string) => {
    let firstLetterUpper = name.charAt(0).toLocaleUpperCase();
    let remainingLettersLower = name.slice(1).toLocaleLowerCase();

    return firstLetterUpper + remainingLettersLower;
};

export function hello(name = ''): string {
    return `Hello, ${nameHandle(name) || 'World'}!`;
}

