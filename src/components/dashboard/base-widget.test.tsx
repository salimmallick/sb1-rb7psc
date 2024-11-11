import { render, screen, fireEvent } from '@/test/test-utils';
import { BaseWidget } from './base-widget';

describe('BaseWidget', () => {
  const defaultProps = {
    title: 'Test Widget',
    description: 'Test Description',
    children: <div>Test Content</div>,
  };

  it('renders widget with title and description', () => {
    render(<BaseWidget {...defaultProps} />);
    
    expect(screen.getByText('Test Widget')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('shows export options when export button is clicked', () => {
    render(<BaseWidget {...defaultProps} />);
    
    const exportButton = screen.getByText('Export');
    fireEvent.click(exportButton);
    
    expect(screen.getByText('Export as PDF')).toBeInTheDocument();
  });

  it('shows CSV export option when allowCSVExport is true', () => {
    render(<BaseWidget {...defaultProps} allowCSVExport />);
    
    const exportButton = screen.getByText('Export');
    fireEvent.click(exportButton);
    
    expect(screen.getByText('Export as CSV')).toBeInTheDocument();
  });
});