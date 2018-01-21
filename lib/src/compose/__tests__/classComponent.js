import { View } from 'react-native';
import React from 'react';
import renderer from "react-test-renderer";

const utils = require('../../utils');
const classComponent = require('../classComponent');

const Overwrite = utils.Overwrite;

describe('classComponent', () => {
    describe('construct', () => {
        let compose;

        beforeEach(() => {
            compose = classComponent.construct('TEST');
        });

        it('should throw if not classComponent override', () => {
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
                Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES,
                Symbol('Something Other'), {
                    primary: '#9E9E9E',
                });

            expect(() => compose(defaults)).toThrow();
        });

        describe('with proper scope overwrite', () => {
            class ToOverwriteComponent extends React.Component {
                render() {
                    return <View {...this.props}></View>;
                }
            }

            describe('defaults', () => {
                let overwrite;

                beforeEach(() => {
                    let defaults = new Overwrite(
                        'TEST',
                        Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES,
                        Overwrite.SCOPE.DEFAULTS, {
                            primary: {
                                color: 'green',
                            },
                        }
                    );

                    overwrite = classComponent.construct('TEST')(defaults);
                });

                it('should return overwrite function', () => {
                    expect(typeof overwrite).toEqual('function');
                });

                it('should set props to specified default ones', () => {
                    const overwritten = overwrite(ToOverwriteComponent);

                    const rendered = renderer.create(React.createElement(overwritten, null, null)).toJSON();

                    expect(rendered.props.primary.color).toEqual('green');
                    expect(rendered).toMatchSnapshot();
                });

                it('should pass - not overwrite - user defined props', () => {
                    const overwritten = overwrite(ToOverwriteComponent);

                    const rendered = renderer.create(React.createElement(overwritten, {
                        primary: {
                            color: 'red',
                        }
                    }, null)).toJSON();

                    expect(rendered.props.primary instanceof Array).toEqual(true);
                    expect(rendered.props.primary[1].color).toEqual('red');
                    expect(rendered).toMatchSnapshot();
                });
            });

            describe('full', () => {
                let overwrite;

                beforeEach(() => {
                    let defaults = new Overwrite(
                        'TEST',
                        Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES,
                        Overwrite.SCOPE.FULL,
                        ToOverwriteComponent
                    );

                    overwrite = classComponent.construct('TEST')(defaults);
                });

                it('should return overwrite function', () => {
                    expect(typeof overwrite).toEqual('function');
                });

                it('should replace the component entirely', () => {
                    const overwritten = overwrite({});

                    const rendered = renderer.create(React.createElement(overwritten, null, null)).toJSON();

                    expect(rendered).toMatchSnapshot();
                });
            });
        });
    });
});
