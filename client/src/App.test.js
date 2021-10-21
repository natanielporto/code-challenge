import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });
        // const items = ['Pilsner', 'IPA', 'Lager', 'Stout', 'Wheat beer', 'Pale Ale'];
        // const ids = ['1', '2', '3', '4', '5', '6'];
    // it('has all the 6 hardcoded items', () => {
    //     const { getByText } = render(<App />);
        
    //     return expect(getByText.length).toEqual(6);
    // });
});
