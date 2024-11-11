import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

// This would be expanded with actual content from all guides and tutorials
const searchIndex = [
  // Product Guide
  { 
    title: 'Platform Overview', 
    path: '/learn/product-guide/platform-overview', 
    category: 'Product Guide',
    keywords: ['overview', 'introduction', 'platform', 'features', 'architecture']
  },
  { 
    title: 'Dashboards', 
    path: '/learn/product-guide/dashboards', 
    category: 'Product Guide',
    keywords: ['dashboard', 'widgets', 'visualization', 'layout', 'customize']
  },
  { 
    title: 'Metrics & Analytics', 
    path: '/learn/product-guide/metrics', 
    category: 'Product Guide',
    keywords: ['metrics', 'analytics', 'measurement', 'tracking', 'data']
  },
  { 
    title: 'Performance Monitoring', 
    path: '/learn/product-guide/performance', 
    category: 'Product Guide',
    keywords: ['performance', 'monitoring', 'alerts', 'optimization']
  },
  { 
    title: 'Data Collection', 
    path: '/learn/product-guide/data-collection', 
    category: 'Product Guide',
    keywords: ['data', 'collection', 'ingestion', 'sources', 'integration']
  },
  { 
    title: 'Data Processing', 
    path: '/learn/product-guide/data-processing', 
    category: 'Product Guide',
    keywords: ['processing', 'transformation', 'pipeline', 'analysis']
  },
  { 
    title: 'Storage & Retention', 
    path: '/learn/product-guide/storage', 
    category: 'Product Guide',
    keywords: ['storage', 'retention', 'backup', 'data management']
  },
  { 
    title: 'User Analytics', 
    path: '/learn/product-guide/user-analytics', 
    category: 'Product Guide',
    keywords: ['user', 'analytics', 'behavior', 'tracking', 'insights']
  },

  // Tutorials
  { 
    title: 'Creating Dashboards', 
    path: '/learn/tutorials/creating-dashboards', 
    category: 'Tutorials',
    keywords: ['dashboard', 'create', 'setup', 'widgets', 'tutorial']
  },
  { 
    title: 'Data Analysis', 
    path: '/learn/tutorials/data-analysis', 
    category: 'Tutorials',
    keywords: ['analysis', 'data', 'visualization', 'insights', 'tutorial']
  },
  { 
    title: 'Performance Monitoring', 
    path: '/learn/tutorials/performance-monitoring', 
    category: 'Tutorials',
    keywords: ['performance', 'monitoring', 'setup', 'alerts', 'tutorial']
  },
  { 
    title: 'User Tracking', 
    path: '/learn/tutorials/user-tracking', 
    category: 'Tutorials',
    keywords: ['user', 'tracking', 'analytics', 'behavior', 'tutorial']
  }
];

export function LearnSearch() {
  const [searchResults, setSearchResults] = useState<typeof searchIndex>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const queryLower = query.toLowerCase();
    
    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(queryLower) ||
      item.category.toLowerCase().includes(queryLower) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(queryLower))
    );

    // Sort results by relevance
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      // Exact matches first
      if (aTitle === queryLower && bTitle !== queryLower) return -1;
      if (bTitle === queryLower && aTitle !== queryLower) return 1;
      
      // Then starts with
      if (aTitle.startsWith(queryLower) && !bTitle.startsWith(queryLower)) return -1;
      if (bTitle.startsWith(queryLower) && !aTitle.startsWith(queryLower)) return 1;
      
      // Then contains
      return 0;
    });

    setSearchResults(results);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search documentation..."
          className="pl-8"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      
      {isSearching && searchResults.length > 0 && (
        <Card className="absolute w-full mt-2 p-2 z-50 max-h-[400px] overflow-y-auto">
          <ul className="space-y-2">
            {searchResults.map((result, index) => (
              <li 
                key={index}
                className="p-2 hover:bg-accent rounded-md cursor-pointer"
                onClick={() => handleResultClick(result.path)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{result.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {result.keywords.slice(0, 3).map((keyword, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="mr-1 text-xs"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge>{result.category}</Badge>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {isSearching && searchResults.length === 0 && (
        <Card className="absolute w-full mt-2 p-4 z-50">
          <p className="text-sm text-muted-foreground text-center">
            No results found. Try different keywords or browse the documentation.
          </p>
        </Card>
      )}
    </div>
  );
}