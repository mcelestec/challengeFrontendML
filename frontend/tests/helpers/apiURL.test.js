import { urlItemAPI, urlItemsAPI } from "../../src/helpers/apiURL";

describe('Test: probando apiURL', () => {

    test('Llamada a urlItemAPI con id=12345', () => {
        const id = '12345';

        const url = urlItemAPI(id);

        expect(url).toBe(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
    });

    test('Llamada a urlItemsAPI con query="calculadora"', () => {
        const query = 'calculadora';

        const url = urlItemsAPI(query, 4);

        expect(url).toBe(`${process.env.REACT_APP_API_URL}/api/items?q=${query}&limit=4`);
    });

    test('Llamada a urlItemsAPI con query="calculadora" sin límite (0)', () => {
        const query = 'calculadora';

        const url = urlItemsAPI(query, 0);

        expect(url).toBe(`${process.env.REACT_APP_API_URL}/api/items?q=${query}`);
    });

    test('Llamada a urlItemsAPI con query="calculadora" sin límite (null)', () => {
        const query = 'calculadora';

        const url = urlItemsAPI(query);

        expect(url).toBe(`${process.env.REACT_APP_API_URL}/api/items?q=${query}`);
    });

    test('Llamada a urlItemsAPI con query="casa rodante"', () => {
        const query = 'casa rodante';

        const url = urlItemsAPI(query, 4);

        expect(url).toBe(`${process.env.REACT_APP_API_URL}/api/items?q=${encodeURI(query)}&limit=4`);
    });

})