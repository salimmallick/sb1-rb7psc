import { render, screen, fireEvent } from '@/test/test-utils';
import { FeatureAdoptionWidget } from '../feature-adoption';

describe('FeatureAdoptionWidget', () => {
  it('renders correctly', () => {
    render(<FeatureAdoptionWidget />);
    
    expect(screen.getByText('Feature Adoption Rates')).toBeInTheDocument();
    expect(screen.getByText('Adoption Trends')).toBeInTheDocument();
  });

  it('allows feature selection', () => {
    render(<FeatureAdoptionWidget />);
    
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    
    expect(screen.getByText('All Features')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  it('displays charts', () => {
    const { container } = render(<FeatureAdoptionWidget />);
    
    expect(container.getElementsByClassName('echarts-for-react').length).toBe(2);
  });
});