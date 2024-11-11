import { render, screen, fireEvent } from '@/test/test-utils';
import { RetentionAnalysisWidget } from '../retention-analysis';

describe('RetentionAnalysisWidget', () => {
  it('renders correctly', () => {
    render(<RetentionAnalysisWidget />);
    
    expect(screen.getByText('Retention Curves')).toBeInTheDocument();
    expect(screen.getByText('Retention Heatmap')).toBeInTheDocument();
  });

  it('allows cohort selection', () => {
    render(<RetentionAnalysisWidget />);
    
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    
    expect(screen.getByText('All Cohorts')).toBeInTheDocument();
    expect(screen.getByText('Week 1')).toBeInTheDocument();
    expect(screen.getByText('Week 2')).toBeInTheDocument();
  });

  it('displays charts', () => {
    const { container } = render(<RetentionAnalysisWidget />);
    
    expect(container.getElementsByClassName('echarts-for-react').length).toBe(2);
  });
});