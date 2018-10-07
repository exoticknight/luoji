export declare enum Comparation {
    '==' = 0,
    '===' = 1,
    '!=' = 2,
    '!==' = 3,
    '<' = 4,
    '>' = 5,
    '<=' = 6,
    '>=' = 7
}
export declare type Assertion = boolean | [any, keyof typeof Comparation, any];
export declare function assert(assertion: Assertion): boolean;
export declare function and(...args: Assertion[]): boolean;
export declare function or(...args: Assertion[]): boolean;
export declare function not(assertion: Assertion): boolean;
declare const _default: {
    and: typeof and;
    or: typeof or;
    not: typeof not;
    assert: typeof assert;
};
export default _default;
