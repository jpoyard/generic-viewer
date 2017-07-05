import { Version } from './version';

describe('AppComponent', () => {

    it('should return major version', () => {
        // Given
        const expected = '2';
        const version = new Version(`${expected}.y.z`);
        // When
        const actual = version.major;
        // Then
        expect(actual).toBe(expected);
    })

    it('should return minor version', () => {
        // Given
        const expected = '4';
        const version = new Version(`x.${expected}.z`);
        // When
        const actual = version.minor;
        // Then
        expect(actual).toBe(expected);
    })

    it('should return patch version', () => {
        // Given
        const expected = '8';
        const version = new Version(`x.y.${expected}`);
        // When
        const actual = version.patch;
        // Then
        expect(actual).toBe(expected);
    })

    it('should return full version', () => {
        // Given
        const expected = 'x.y.z';
        const version = new Version(`${expected}`);
        // When
        const actual = version.toString();
        // Then
        expect(actual).toBe(expected);
    })

});
