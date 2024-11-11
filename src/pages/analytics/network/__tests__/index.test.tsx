import { render } from '@/test/test-utils';
import NetworkAnalytics from '../index';

describe('Network Analytics Dashboard', () => {
  it('renders correctly', () => {
    const { container } = render(<NetworkAnalytics />);
    expect(container).toMatchSnapshot();
  });

  it('renders all network metrics', () => {
    const { getByText } = render(<NetworkAnalytics />);
    
    expect(getByText('Network Analytics')).toBeInTheDocument();
    expect(getByText('Network Performance Overview')).toBeInTheDocument();
    expect(getByText('Network Quality')).toBeInTheDocument();
    expect(getByText('Network Path')).toBeInTheDocument();
  });
});