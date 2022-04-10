import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Input } from './Input';

describe('<Input/>', () => {
    it('Should show input with initial value', async () => {
        render(
            <Input
                label="Test label"
                value="John Doe"
                onChange={() => null}
                data-testid="input-field"
            />
        );
        const inputField = await screen.findByTestId(`input-field`);
        await waitFor(() => expect(inputField).toHaveDisplayValue('John Doe'));
    });

    it('Should fire on-change event on Input', async () => {
        const { getByTestId } = render(<Input label="Test label" data-testid="input-field" />);
        const inputField = getByTestId('input-field');
        fireEvent.change(inputField, {
            target: {
                value: 'something',
            },
        });
        const filedValue = await screen.findByTestId(`input-field`);
        await waitFor(() => expect(filedValue).toHaveDisplayValue('something'));
    });

    it('Should show error message on by error prop', async () => {
        render(<Input label="Test label" error="test error" data-testid="input-field" />);
        const errorMessage = await screen.findByText(/test error/);
        expect(errorMessage).toBeVisible();
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
