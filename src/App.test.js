import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(cleanup);

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
