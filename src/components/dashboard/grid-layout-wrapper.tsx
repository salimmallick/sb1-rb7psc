import { ReactNode } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Layout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
}

interface GridLayoutWrapperProps {
  children: ReactNode;
  layouts: {
    lg: Layout[];
    md?: Layout[];
    sm?: Layout[];
  };
  onLayoutChange?: (currentLayout: Layout[], allLayouts: any) => void;
  className?: string;
}

export function GridLayoutWrapper({ 
  children, 
  layouts, 
  onLayoutChange,
  className = ''
}: GridLayoutWrapperProps) {
  return (
    <div className={`min-h-[calc(100vh-14rem)] ${className}`}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 12, md: 12, sm: 12 }}
        rowHeight={60}
        containerPadding={[16, 16]}
        margin={[16, 16]}
        onLayoutChange={onLayoutChange}
        isDraggable={false}
        isResizable={false}
        useCSSTransforms={true}
        compactType="vertical"
        preventCollision={false}
      >
        {children}
      </ResponsiveGridLayout>
    </div>
  );
}