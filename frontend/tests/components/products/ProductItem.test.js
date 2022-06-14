import { render } from "@testing-library/react";
import App from "../../../src/App";
import ProductItem from "../../../src/components/products/ProductItem";

describe('Test: probando <ProductItem />', () => {
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
        "free_shipping": false
    };

    test('Llamada a ProductItem: debe hacer match con el snapshot', () => {
        const { container } = render(<ProductItem item={item} />, { wrapper: App });
        expect(container).toMatchSnapshot();
    }
    );

});