import { render, screen } from "@testing-library/react";
import Currency from "../../../src/components/currencies/Currency";

describe('Test: probando <Currency />', () => {

    const currency_ars = 'ARS';
    const currency_usd = 'USD';
    const decimal_0 = 0;
    const decimal_less_10 = 7;
    const decimal_more_10 = 50;
    const amount_less_1000 = 900;
    const amount_more_1000 = 100800;

    test('Llamada a Currency: debe hacer match con el snapshot', () => {
        const { container } = render(<Currency currency={currency_ars} amount={amount_less_1000} decimals={amount_more_1000} />);
        expect(container).toMatchSnapshot();
    }
    );

    test('Llamada a Currency: validar props obligatorios', () => {

        render(<Currency currency={currency_ars} amount={amount_less_1000} decimals={decimal_more_10} />);

    }
    );

    test('Llamada a Currency: 900.50 pesos argentinos', () => {

        render(<Currency currency={currency_ars} amount={amount_less_1000} decimals={decimal_more_10} />);

        expect(screen.getByTestId('currency-amount').innerHTML).toBe(`$&nbsp;900`);
        expect(screen.getByTestId('currency-decimals').innerHTML).toBe(`${decimal_more_10}`);
    }
    );

    test('Llamada a Currency: 100800 pesos argentinos (decimales 0)', () => {

        render(<Currency currency={currency_ars} amount={amount_more_1000} decimals={decimal_0} />);

        expect(screen.getByTestId('currency-amount').innerHTML).toBe(`$&nbsp;100.800`);
        expect(screen.queryByTestId('currency-decimals')).toBeNull();
    }
    );

    test('Llamada a Currency: 900.50 dólares', () => {

        render(<Currency currency={currency_usd} amount={amount_less_1000} decimals={decimal_more_10} />);

        expect(screen.getByTestId('currency-amount').innerHTML).toBe(`US$&nbsp;900`);
        expect(screen.getByTestId('currency-decimals').innerHTML).toBe(`${decimal_more_10}`);
    }
    );

    test('Llamada a Currency: 100800 dólares (decimales 0)', () => {

        render(<Currency currency={currency_usd} amount={amount_more_1000} decimals={decimal_0} />);

        expect(screen.getByTestId('currency-amount').innerHTML).toBe(`US$&nbsp;100.800`);
        expect(screen.queryByTestId('currency-decimals')).toBeNull();
    }
    );

    test('Llamada a Currency: 100800 dólares (sin decimales)', () => {

        render(<Currency currency={currency_usd} amount={amount_more_1000} />);

        expect(screen.getByTestId('currency-amount').innerHTML).toBe(`US$&nbsp;100.800`);
        expect(screen.queryByTestId('currency-decimals')).toBeNull();
    }
    );

    test('Llamada a Currency: decimales mayores a 0 y menores a 10', () => {

        render(<Currency currency={currency_usd} amount={amount_less_1000} decimals={decimal_less_10} />);

        expect(screen.getByTestId('currency-decimals').innerHTML).toBe(`0${decimal_less_10}`);
    }
    );
});