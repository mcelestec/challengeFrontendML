import { render, screen } from "@testing-library/react";
import CategoryList from "../../../src/components/categories/CategoryList";

describe('Test: probando <CategoryList />', () => {
    const items = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

    test('Llamada a CategoryList: debe hacer match con el snapshot', () => {
        const { container } = render(<CategoryList items={items} />);
        expect(container).toMatchSnapshot();
    }
    );

    test('Llamada a CategoryList: probar que se muestren todos los elementos de la lista', () => {

        render(<CategoryList items={items} />);

        const categoryElements = screen.getAllByTestId('category-list-item');
        expect(categoryElements.length).toBe(4);

        // validar si están todas las categorias
        const categories = [];
        categoryElements.forEach(i => categories.push(i.innerHTML));
        expect(items.every(i => categories.includes(i))).toBeTruthy();
    }
    );

});