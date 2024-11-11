import { render, fireEvent } from '@/test/test-utils';
import { WidgetWrapper } from '../widget-wrapper';

describe('WidgetWrapper', () => {
  const defaultProps = {
    title: 'Test Widget',
    children: <div>Widget Content</div>
  };

  it('renders correctly', () => {
    const { container } = render(<WidgetWrapper {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it('handles export functionality', () => {
    const { getByText } = render(<WidgetWrapper {...defaultProps} />);
    
    const exportButton = getByText('Export');
    fireEvent.click(exportButton);
    
    expect(getByText('Export as PDF')).toBeInTheDocument();
    expect(getByText('Export as CSV')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <WidgetWrapper {...defaultProps} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});