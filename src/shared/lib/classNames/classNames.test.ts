import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class';

        expect(classNames('someClass', {}, ['class'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class hovered';

        expect(classNames('someClass', { hovered: true }, ['class'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class hovered';

        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class'])).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class hovered';

        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class'])).toBe(expected);
    });
})