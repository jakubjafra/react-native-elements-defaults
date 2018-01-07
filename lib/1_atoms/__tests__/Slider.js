import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");

describe('with no theme applied', () => {
    let OldSlider, Slider;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/slider': {
            }
        };

        OldSlider = require('react-native-elements/src/slider/Slider').default;

        Slider = utils.connectTheme(true, 'atoms/slider', require('../Slider'))(defaultStyles);
    });

    test('OldSlider and Slider should be different', () => {
        expect(OldSlider).not.toBe(Slider);
    });

    test('OldSlider renders correctly', () => {
        const tree = renderer.create(<OldSlider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Slider renders correctly', () => {
        const tree = renderer.create(<Slider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldSlider and Slider returns the same thing if no theme is applied', () => {
        const oldTree = renderer.create(<OldSlider />).toJSON();
        const tree = renderer.create(<Slider />).toJSON();

        expect(JSON.stringify(oldTree)).toEqual(JSON.stringify(tree));
    });
});

describe('with basic theme applied', () => {
    let OldSlider, Slider;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/slider': {
                trackStyle: {
                    backgroundColor: 'red',
                }
            }
        };

        OldSlider = require('react-native-elements/src/slider/Slider').default;

        Slider = utils.connectTheme(true, 'atoms/slider', require('../Slider'))(defaultStyles);
    });

    test('OldSlider and Slider should be different', () => {
        expect(OldSlider).not.toBe(Slider);
    });

    test('OldSlider renders correctly', () => {
        const tree = renderer.create(<OldSlider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Slider renders correctly', () => {
        const tree = renderer.create(<Slider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldSlider and Slider should be different caused by theme applied', () => {
        const oldTree = renderer.create(<OldSlider />).toJSON();
        const tree = renderer.create(<Slider />).toJSON();

        expect(oldTree).not.toEqual(tree);
    });
});
