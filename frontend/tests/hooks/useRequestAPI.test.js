import { renderHook, waitFor } from "@testing-library/react";
import { useRequestAPI } from "../../src/hooks/useRequestAPI";

describe('Test: probando hook useRequestAPI', () => {

    test('Llamada a useRequestAPI: debe retornar el estado inicial', () => {

        const { result } = renderHook(() => useRequestAPI('http://localhost:3001/api/items?q=casa&limit=4'));
        const { loaded, data } = result.current;

        expect(loaded).toBeFalsy();
        expect(data).toBeNull();
    });


    test('Llamada a useRequestAPI: debe retornar datos de item', async () => {

        const { result } = renderHook(() => useRequestAPI('http://localhost:3001/api/items?q=casa&limit=4'));

        await waitFor(
            () => expect(result.current.data.items.length).toBeGreaterThanOrEqual(0),
            {
                timeout: 1000
            }
        );

        const { loaded, data } = result.current;

        expect(loaded).toBeTruthy();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });


});