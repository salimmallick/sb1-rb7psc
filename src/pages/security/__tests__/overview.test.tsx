import { render } from '@/test/test-utils';
import SecurityOverview from '../overview';

describe('Security Overview Dashboard', () => {
  it('renders correctly', () => {
    const { container } = render(<SecurityOverview />);
    expect(container).toMatchSnapshot();
  });

  it('renders all security metrics', () => {
    const { getByText } = render(<SecurityOverview />);
    
    expect(getByText('Security Overview')).toBeInTheDocument();
    expect(getByText('Security Score')).toBeInTheDocument();
    expect(getByText('Threat Analysis')).toBeInTheDocument();
    expect(getByText('Compliance Status')).toBeInTheDocument();
  });
});