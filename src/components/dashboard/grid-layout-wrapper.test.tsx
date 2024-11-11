import { render, screen } from '@/test/test-utils';
import { GridLayoutWrapper } from './grid-layout-wrapper';

describe('GridLayoutWrapper', () => {
  const defaultProps = {
    layouts: {
      lg: [
        { i: 'test-widget', x: 0, y: 0, w: 6, h: 4 }
      ]
    },
    children: <div key="test-widget">Test Widget</div>,
    onLayoutChange: jest.fn()
  };

  it('renders children within grid layout', () => {
    render(<GridLayoutWrapper {...defaultProps} />);
    
    expect(screen.getByText('Test Widget')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <GridLayoutWrapper {...defaultProps} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});