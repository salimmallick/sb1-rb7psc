import { render, screen, fireEvent } from '@/test/test-utils';
import { EngagementHeatmapWidget } from '../engagement-heatmap';

describe('EngagementHeatmapWidget', () => {
  it('renders correctly', () => {
    render(<EngagementHeatmapWidget />);
    
    expect(screen.getByText('Weekly Activity Heatmap')).toBeInTheDocument();
    expect(screen.getByText('Daily Activity Trends')).toBeInTheDocument();
  });

  it('allows metric selection', () => {
    render(<EngagementHeatmapWidget />);
    
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('Sessions')).toBeInTheDocument();
    expect(screen.getByText('Session Duration')).toBeInTheDocument();
  });

  it('displays charts', () => {
    const { container } = render(<EngagementHeatmapWidget />);
    
    expect(container.getElementsByClassName('echarts-for-react').length).toBe(2);
  });
});