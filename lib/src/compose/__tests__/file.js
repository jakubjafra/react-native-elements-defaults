const utils = require('../../utils');
const file = require('../file');

const Overwrite = utils.Overwrite;

describe('file', () => {
    describe('construct', () => {
        let compose;

        beforeEach(() => {
            compose = file.construct('TEST');
        });

        it('should throw if not file override', () => {
            let defaults = new Overwrite(
                'TEST',
                Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES,
                Overwrite.SCOPE.DEFAULTS, {
                primary: '#9E9E9E',
            });

            expect(() => compose(defaults)).toThrow();
        });

        it('should throw if not recognized overwrite scope', () => {
            let defaults = new Overwrite(
                'TEST',
                Overwrite.TYPE.FILE,
                Symbol('Something Other'), {
                    primary: '#9E9E9E',
                });

            expect(() => compose(defaults)).toThrow();
        });

        describe('with proper scope overwrite', () => {
            describe('defaults', () => {
                let overwrite;

                beforeEach(() => {
                    let defaults = new Overwrite(
                        'TEST',
                        Overwrite.TYPE.FILE,
                        Overwrite.SCOPE.DEFAULTS, {
                            primary: '#9E9E9E',
                    });

                    overwrite = file.construct('TEST')(defaults);
                });

                it('should return overwrite function', () => {
                    expect(typeof overwrite).toEqual('function');
                });

                it('should overwrite defaults members of specified module', () => {
                    const overwritten = overwrite({
                        primary: 'TEST'
                    });

                    expect(overwritten.primary).toEqual('#9E9E9E');
                });
            });

            describe('defaults deep', () => {
                let overwrite;

                beforeEach(() => {
                    let defaults = new Overwrite(
                        'TEST',
                        Overwrite.TYPE.FILE,
                        Overwrite.SCOPE.DEFAULTS_DEEP, {
                            ios: {
                                test: 'abc'
                            }
                        });

                    overwrite = file.construct('TEST')(defaults);
                });

                it('should return overwrite function', () => {
                    expect(typeof overwrite).toEqual('function');
                });

                it('should overwrite defaults members of specified module', () => {
                    const overwritten = overwrite({
                        ios: {
                            test: 'DEF',
                            other: 123
                        }
                    });

                    expect(overwritten.ios.test).toEqual('abc');
                    expect(overwritten.ios.other).toEqual(123);
                });
            });

            describe('full', () => {
                let overwrite;

                beforeEach(() => {
                    let defaults = new Overwrite(
                        'TEST',
                        Overwrite.TYPE.FILE,
                        Overwrite.SCOPE.FULL, {
                            ios: {
                                test: 'abc'
                            }
                        });

                    overwrite = file.construct('TEST')(defaults);
                });

                it('should return overwrite function', () => {
                    expect(typeof overwrite).toEqual('function');
                });

                it('should overwrite defaults members of specified module', () => {
                    const overwritten = overwrite({
                        ios: {
                            test: 'DEF',
                            other: 123
                        }
                    });

                    expect(overwritten.ios.test).toEqual('abc');
                    expect(overwritten.ios.other).toEqual(undefined);
                });
            });
        });
    });
});
