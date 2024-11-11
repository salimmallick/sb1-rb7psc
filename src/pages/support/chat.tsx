import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
  agentName?: string;
  agentAvatar?: string;
}

export function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      sender: 'agent',
      timestamp: '10:00 AM',
      agentName: 'Sarah Johnson',
      agentAvatar: '/avatars/sarah.jpg'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        content: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setNewMessage('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Live Chat Support</h1>
        <p className="mt-2 text-muted-foreground">
          Chat with our support team in real-time
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Chat Session</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col h-[600px]">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.sender === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <Avatar>
                        <AvatarImage 
                          src={message.sender === 'agent' ? message.agentAvatar : undefined} 
                        />
                        <AvatarFallback>
                          {message.sender === 'agent' ? 'AG' : 'ME'}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg p-4 max-w-[80%] ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.sender === 'agent' && (
                          <div className="text-sm font-medium mb-1">
                            {message.agentName}
                          </div>
                        )}
                        <p>{message.content}</p>
                        <div className="text-xs mt-1 opacity-70">
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <Button type="submit">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Current Agent</h4>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/avatars/sarah.jpg" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Senior Support Agent</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="p-0">Documentation</Button>
                </li>
                <li>
                  <Button variant="link" className="p-0">FAQs</Button>
                </li>
                <li>
                  <Button variant="link" className="p-0">Knowledge Base</Button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Alternative Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: support@thedata.io<br />
                Phone: +1 (555) 123-4567<br />
                Hours: 24/7
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}