import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CreateTicketDialog } from './components/create-ticket-dialog';

interface Ticket {
  id: string;
  subject: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  created: string;
  lastUpdated: string;
  category: string;
}

export function SupportTickets() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // Mock data - replace with actual API call
  const tickets: Ticket[] = [
    {
      id: 'TICK-1234',
      subject: 'API Integration Issue',
      status: 'open',
      priority: 'high',
      created: '2024-01-20',
      lastUpdated: '2024-01-21',
      category: 'Technical'
    },
    {
      id: 'TICK-1235',
      subject: 'Billing Question',
      status: 'resolved',
      priority: 'medium',
      created: '2024-01-19',
      lastUpdated: '2024-01-20',
      category: 'Billing'
    }
  ];

  const getStatusColor = (status: Ticket['status']) => {
    const colors = {
      'open': 'bg-blue-500',
      'in-progress': 'bg-yellow-500',
      'resolved': 'bg-green-500',
      'closed': 'bg-gray-500'
    };
    return colors[status];
  };

  const getPriorityColor = (priority: Ticket['priority']) => {
    const colors = {
      'low': 'bg-gray-500',
      'medium': 'bg-yellow-500',
      'high': 'bg-orange-500',
      'urgent': 'bg-red-500'
    };
    return colors[priority];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="mt-2 text-muted-foreground">
            View and manage your support tickets
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Ticket
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.subject}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(ticket.status)}>
                      {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(ticket.priority)}>
                      {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{ticket.category}</TableCell>
                  <TableCell>{ticket.created}</TableCell>
                  <TableCell>{ticket.lastUpdated}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <CreateTicketDialog 
        open={isCreateDialogOpen} 
        onOpenChange={setIsCreateDialogOpen} 
      />
    </div>
  );
}