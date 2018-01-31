const utils = require('../utils');

describe('utils', () => {
    describe('placeStyleOnTop', () => {
        const defaultStyle = {
            fontFamily: 'Arial'
        };

        it('should return default styles if no other is present', () => {
            const output = utils.placeStyleOnTop(undefined, defaultStyle);

            expect(output).toBe(defaultStyle);
        });

        it('should return overridden array, with new styles on top of it', () => {
            const output = utils.placeStyleOnTop([3, 4], defaultStyle);

            expect(output instanceof Array).toEqual(true);
            expect(output[0]).toBe(defaultStyle);
            expect(output[1]).toEqual(3);
            expect(output[2]).toEqual(4);
        });

        it('should return overriden object, with new styles on top of created array', () => {
            const style = {
                fontFamily: 'Verdana'
            };

            const output = utils.placeStyleOnTop(style, defaultStyle);

            expect(output instanceof Array).toEqual(true);
            expect(output[0]).toBe(defaultStyle);
            expect(output[1]).toBe(style);
        });

        it('should return overriden number, with new styles on top of created array', () => {
            const output = utils.placeStyleOnTop(15, defaultStyle);

            expect(output instanceof Array).toEqual(true);
            expect(output[0]).toBe(defaultStyle);
            expect(output[1]).toBe(15);
        });

        it('should throw if existing style does not match any recognized one', () => {
            expect(() => {
                utils.placeStyleOnTop('someRandomString', defaultStyle);
            }).toThrow();
        });
    });

    describe('ModuleOverride', () => {
        describe('_overrideModuleDefault', () => {
            it('should override module defaults with new value', () => {
                const testModule = {
                    'default': {
                        something: true
                    }
                };

                const newModuleDefaults = {
                    somethingElse: 'Yes, yes, yes!'
                };

                expect(utils.ModuleOverride._overrideModuleDefault(
                    testModule,
                    () => newModuleDefaults
                )).toBe(newModuleDefaults);
                expect(testModule.default).toBe(newModuleDefaults);
            });
        });

        describe('object', () => {
            let override, overrideModule, overrideFunction, composeFunction, newModuleDefaults;

            beforeEach(() => {
                overrideModule = {
                    'default': {
                        something: true
                    }
                };

                newModuleDefaults = {
                    somethingElse: 'Yes, yes, yes!'
                };

                composeFunction = jest.fn().mockReturnValue(newModuleDefaults);
                overrideFunction = jest.fn().mockReturnValue(composeFunction);

                override = new utils.ModuleOverride('test', overrideModule, overrideFunction);
            });

            it('should call overrideFunction using selected theme', () => {
                const theme = {
                    'test': {
                        style: {
                            fontFamily: 'Arial'
                        }
                    }
                };

                override.useTheme(theme);

                expect(overrideFunction).toBeCalledWith(theme['test']);
            });

            it('should not use StyleSheet if specified', () => {
                override.isStyleSheet = false;

                const theme = {
                    'test': {
                        fontFamily: 'Arial'
                    }
                };

                override.useTheme(theme);

                expect(overrideFunction).toBeCalledWith(theme['test']);
            })
        })
    });
});
