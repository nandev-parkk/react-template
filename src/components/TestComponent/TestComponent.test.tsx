import TestComponent from './TestComponent';
import { render } from '@testing-library/react';

describe('<TestComponent />', () => {
	it('matches snapshot', () => {
		const utils = render(<TestComponent name='shpark' age={20} />);
		expect(utils.container).toMatchSnapshot();
	});
	it('props가 맞는지 확인', () => {
		const utils = render(<TestComponent name='shpark' age={20} />);
		utils.getByText('shpark');
		utils.getByText(20);
	});
});
