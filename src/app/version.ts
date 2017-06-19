export class Version {
    private _major: string;
    private _minor: string;
    private _patch: string;

    constructor(full: string) {
        [this._major, this._minor, this._patch] = full.split('.');
    };

    get major(): string {
        return this._major;
    };

    get minor(): string {
        return this._minor;
    };
    get patch(): string {
        return this._patch;
    };
    toString(): string {
        return `${this._major}.${this._minor}.${this._patch}`;
    }
}

declare function require(moduleName: string): any;

const { version: pkgVersion } = require('../../package.json')

export const appVersion = new Version(pkgVersion);
