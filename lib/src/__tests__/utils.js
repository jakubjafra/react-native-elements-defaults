const utils = require('../utils');

describe('utils', () => {
    describe('overrideBottom', () => {
        const defaultStyle = {
            fontFamily: 'Arial'
        };

        it('should return default styles if no other is present', () => {
            const output = utils.overrideBottom(undefined, defaultStyle);

            expect(output).toBe(defaultStyle);
        });

        it('should return overridden array, with new styles on top of it', () => {
            const output = utils.overrideBottom([3, 4], defaultStyle);

            expect(output instanceof Array).toEqual(true);
            expect(output[0]).toBe(defaultStyle);
            expect(output[1]).toEqual(3);
            expect(output[2]).toEqual(4);
        });

        it('should return overriden object, with new styles on top of created array', () => {
            const style = {
                fontFamily: 'Verdana'
            };

            const output = utils.overrideBottom(style, defaultStyle);

            expect(output instanceof Array).toEqual(true);
            expect(output[0]).toBe(defaultStyle);
            expect(output[1]).toBe(style);
        });

        it('should return overriden number, with new styles on top of created array', () => {
            const output = utils.overrideBottom(15, defaultStyle);

            expect(output instanceof Array).toEqual(true);
            expect(output[0]).toBe(defaultStyle);
            expect(output[1]).toBe(15);
        });

        it('should throw if existing style does not match any recognized one', () => {
            expect(() => {
                utils.overrideBottom('someRandomString', defaultStyle);
            }).toThrow();
        });
    });
});
