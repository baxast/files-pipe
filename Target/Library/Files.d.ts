import type { Type as Action } from "../Library/Files/Action.js";
import type { Type as Path } from "../Library/Files/Path.js";
import type { Type as Plan } from "../Library/Files/Plan.js";
import type { Type as Option } from "../Option/Index.js";
import type { Pattern } from "fast-glob";
export default class Files {
    /**
     * The function `Pipe` is a TypeScript async function that takes an optional `Action`
     * parameter and returns the result of calling `Pipe` with `this.Plan` and `Action`.
     * @param {Action} Action - The Action parameter is an optional parameter that
     * specifies the execution strategy to be used in the Pipe function. It has a default value of
     * Default.Pipe, which means that if no Action parameter is provided when calling the Pipe
     * function, it will use the default execution strategy.
     */
    Pipe: (Action: Action) => Promise<Plan>;
    /**
     * The function `Not` takes a `File` parameter and excludes it from the `Plan.Results` array.
     * @param File - The parameter "File" is of type "Option['Exclude']".
     * @returns the current object (`this`) after performing some operations.
     */
    Not: (File: Option["Exclude"]) => Promise<this>;
    /**
     * The function `By` takes a file pattern or an array of file patterns and returns a promise that
     * resolves to the results of executing the patterns on the specified paths.
     * @param {Pattern | Pattern[]} [File=**/ By: (File?: Pattern | Pattern[]) => Promise<this>;
    /**
     * The function `In` takes a path and updates the `Plan.Paths` property with the input and output
     * paths.
     * @param {Path} [Path=./] - The `Path` parameter is a string that represents the path to a file or
     * directory. It has a default value of "./", which means it will use the current directory if no path
     * is provided.
     * @returns the value of `this`, which refers to the current object.
     */
    In: (Path?: Path) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
