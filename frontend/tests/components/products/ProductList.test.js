import { render } from "@testing-library/react";
import App from "../../../src/App";
import ProductList from "../../../src/components/products/ProductList";

describe('Test: probando <ProductList />', () => {
    const items = [{
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
        "sold_quantity": 5
    },
    {
        "id": "MLA3341217077",
        "title": "Casa 2 ambientes",
        "address": "Santa Fe",
        "price": {
            "currency": "ARS",
            "amount": 79000,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_946381-MLA50220484139_062022-I.jpg",
        "free_shipping": false,
        "condition": "new",
        "sold_quantity": 0
    }];

    test('Llamada a ProductList: debe hacer match con el snapshot', () => {
        const { container } = render(<ProductList items={items} />, { wrapper: App });
        expect(container).toMatchSnapshot();
    }
    );

});