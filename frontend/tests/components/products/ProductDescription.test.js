import { render } from "@testing-library/react";
import App from "../../../src/App";
import ProductDescription from "../../../src/components/products/ProductDescription";

describe('Test: probando <ProductDescription />', () => {
    const item = {
        "id": "MLA1141217077",
        "title": "Casa 3 Ambientes Mas Estudio Balvanera Once",
        "address": "Capital Federal",
        "price": {
            "currency": "ARS",
            "amount": 59000,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_946381-MLA50220484139_062022-I.jpg",
        "free_shipping": false,
        "condition": "new",
        "sold_quantity": 5,
        "description": "Casa a alquilar - 3 ambientes, excelente ubicación."
    };

    test('Llamada a ProductDescription: debe hacer match con el snapshot', () => {
        const { container } = render(<ProductDescription item={item} />, { wrapper: App });
        expect(container).toMatchSnapshot();
    }
    );

});