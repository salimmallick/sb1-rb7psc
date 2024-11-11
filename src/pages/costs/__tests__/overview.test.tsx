import { render } from '@/test/test-utils';
import CostOverview from '../overview';

describe('Cost Overview Dashboard', () => {
  it('renders correctly', () => {
    const { container } = render(<CostOverview />);
    expect(container).toMatchSnapshot();
  });

  it('renders all cost metrics', () => {
    const { getByText } = render(<CostOverview />);
    
    expect(getByText('Cost Overview')).toBeInTheDocument();
    expect(getByText('Monthly Cost Trends')).toBeInTheDocument();
    expect(getByText('Cost Distribution')).toBeInTheDocument();
    expect(getByText('Cost Optimization')).toBeInTheDocument();
  });
});