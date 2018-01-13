import 'react-native';
import React from 'react';
import renderer from "react-test-renderer";

const diff = require('jest-diff');

function defaultTests(name, __oldElement__, __element__, basicTheme){
    describe('with no theme applied', () => {
        let OldElement, Element;

        beforeAll(() => {
            let defaultStyles = {};

            OldElement = __oldElement__.default;
            Element = __element__.compose(defaultStyles)(OldElement);
        });

        test(`Old${name} and ${name} should be different`, () => {
            expect(OldElement).not.toBe(Element);
        });

        test(`Old${name} renders correctly`, () => {
            const tree = renderer.create(<OldElement />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test(`${name} renders correctly`, () => {
            const tree = renderer.create(<Element />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test(`Old${name} and ${name} returns the same thing if no theme is applied`, () => {
            const oldTree = renderer.create(<OldElement />).toJSON();
            const tree = renderer.create(<Element />).toJSON();

            expect(diff(tree, oldTree)).toMatchSnapshot();
        });
    });

    describe('with basic theme applied', () => {
        let OldElement, Element;

        beforeAll(() => {
            let defaultStyles = basicTheme;

            OldElement = __oldElement__.default;
            Element = __element__.compose(defaultStyles)(OldElement);
        });

        test(`Old${name} and ${name} should be different`, () => {
            expect(OldElement).not.toBe(Element);
        });

        test(`Old${name} renders correctly`, () => {
            const tree = renderer.create(<OldElement />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test(`${name} renders correctly`, () => {
            const tree = renderer.create(<Element />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test(`Old${name} and ${name} should be different caused by theme applied`, () => {
            const oldTree = renderer.create(<OldElement />).toJSON();
            const tree = renderer.create(<Element />).toJSON();

            expect(oldTree).not.toEqual(tree);
        });
    });
}

module.exports = {
    defaultTests
};
