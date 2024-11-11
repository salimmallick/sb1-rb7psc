import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Maximize2, Minimize2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { EchoWidget } from './echo-widget';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  widgets?: Array<{
    type: 'chart' | 'table' | 'metric' | 'custom';
    data: any;
    title: string;
  }>;
}

export function EchoAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Here\'s an analysis of your recent user engagement metrics:',
        timestamp: new Date(),
        widgets: [
          {
            type: 'chart',
            title: 'User Engagement',
            data: {
              type: 'line',
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
              datasets: [
                {
                  label: 'Active Users',
                  data: [1200, 1900, 3000, 4900, 6500]
                }
              ]
            }
          },
          {
            type: 'metric',
            title: 'Key Metrics',
            data: {
              metrics: [
                { label: 'Total Users', value: '12.5k', change: '+15%' },
                { label: 'Avg. Session', value: '24m', change: '+5%' },
                { label: 'Retention', value: '89%', change: '+2%' }
              ]
            }
          }
        ]
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const exportConversation = () => {
    const text = messages
      .map(m => `${m.role.toUpperCase()} (${m.timestamp.toLocaleString()})\n${m.content}\n`)
      .join('\n');
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversation.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className={cn(
      "flex flex-col transition-all duration-200",
      isFullscreen ? "fixed inset-0 z-50" : "h-[calc(100vh-2rem)] mx-4"
    )}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <h2 className="font-semibold">Echo AI Assistant</h2>
          <Badge variant="secondary" className="ml-2">Beta</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={exportConversation}
            className="text-muted-foreground"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="text-muted-foreground"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === 'assistant' ? 'bg-muted/50 p-4 rounded-lg' : ''
              )}
            >
              {message.role === 'assistant' ? (
                <Bot className="h-6 w-6 mt-1" />
              ) : (
                <User className="h-6 w-6 mt-1" />
              )}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      {message.role === 'assistant' ? 'Echo AI' : 'You'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="mt-1 text-sm whitespace-pre-wrap">
                    {message.content}
                  </div>
                </div>

                {message.widgets && message.widgets.length > 0 && (
                  <div className="grid gap-4 mt-4">
                    {message.widgets.map((widget, index) => (
                      <EchoWidget
                        key={index}
                        type={widget.type}
                        data={widget.data}
                        title={widget.title}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Echo AI anything..."
            className="min-h-[60px] max-h-[200px]"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={isLoading || !input.trim()}
            className="px-3"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-xs text-muted-foreground">
            Press Shift + Enter for a new line, Enter to send
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="text-xs text-muted-foreground">
            Supports charts, tables, and metrics visualization
          </p>
        </div>
      </div>
    </Card>
  );
}