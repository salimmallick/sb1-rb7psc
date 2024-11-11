import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  BookOpen,
  Users,
  ExternalLink
} from 'lucide-react';

export function Community() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Community & Resources</h1>
        <p className="mt-2 text-muted-foreground">
          Connect with the theData.io community and access helpful resources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Community Forums</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Join discussions, share experiences, and get help from other users.
            </p>
            <Button className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Visit Forums
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Comprehensive guides, API references, and tutorials.
            </p>
            <Button className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Docs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Developer Community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Connect with developers and contribute to our open source projects.
            </p>
            <Button className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Join GitHub
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline">
                <Youtube className="mr-2 h-4 w-4" />
                YouTube
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Groups</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Join local user groups and attend community events.
            </p>
            <Button className="w-full">
              <Users className="mr-2 h-4 w-4" />
              Find Groups
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>External Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Case Studies
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Webinars
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Developer Blog
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}