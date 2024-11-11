import { render, screen, fireEvent } from '@/test/test-utils';
import { InteractiveFunnelWidget } from '../interactive-funnel';

describe('InteractiveFunnelWidget', () => {
  it('renders correctly', () => {
    render(<InteractiveFunnelWidget />);
    
    expect(screen.getByText('Conversion Funnel')).toBeInTheDocument();
    expect(screen.getByText('Conversion Trends')).toBeInTheDocument();
  });

  it('allows stage selection', () => {
    render(<InteractiveFunnelWidget />);
    
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    
    expect(screen.getByText('All Stages')).toBeInTheDocument();
    expect(screen.getByText('Page Visit')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('displays dropoff analysis when stage is selected', () => {
    render(<InteractiveFunnelWidget />);
    
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    fireEvent.click(screen.getByText('Sign Up'));
    
    expect(screen.getByText('Dropoff Analysis: Sign Up')).toBeInTheDocument();
  });

  it('displays charts', () => {
    const { container } = render(<InteractiveFunnelWidget />);
    
    expect(container.getElementsByClassName('echarts-for-react').length).toBeGreaterThanOrEqual(2);
  });
});