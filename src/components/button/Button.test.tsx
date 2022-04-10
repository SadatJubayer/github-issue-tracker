import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button/>', () => {
    it('Should render button with a text prop', () => {
        render(<Button text="Test Label" />);
        const button = screen.getByText(/Test Label/i);
        expect(button).toBeVisible();
    });

    it('Should be able to click the button', () => {
        const mockCallBack = jest.fn();
        render(<Button text="Test Label" onClick={mockCallBack} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('Button should take a type prop.', () => {
        render(<Button text="Test Label" type="submit" />);
        const button = screen.getByRole('button');
        expect(button).toBeVisible();
    });
});

/* For removing react 18 warning */
const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
