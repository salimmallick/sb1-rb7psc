import { render } from '@/test/test-utils';
import { Overview } from '../index';

describe('Overview Dashboard', () => {
  it('renders correctly', () => {
    const { container } = render(<Overview />);
    expect(container).toMatchSnapshot();
  });

  it('renders all key metrics sections', () => {
    const { getByText } = render(<Overview />);
    
    expect(getByText('Overview')).toBeInTheDocument();
    expect(getByText('Performance Overview')).toBeInTheDocument();
    expect(getByText('User Engagement')).toBeInTheDocument();
    expect(getByText('Video Performance')).toBeInTheDocument();
    expect(getByText('Network Performance')).toBeInTheDocument();
  });
});