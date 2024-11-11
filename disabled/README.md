# Disabled Components Directory

This directory contains temporarily disabled components to optimize development workflow and reduce token usage. These components are fully functional but moved here to reduce the context size during active development.

## Directory Structure

```
disabled/
├── overview/
│   ├── pages/
│   └── components/
├── echo-ai/
├── analytics/
│   ├── pages/
│   └── components/
├── security/
│   └── pages/
├── costs/
│   └── pages/
└── alerts/
    └── pages/
```

## Re-enabling Components

To re-enable a component:

1. Remove its entry from `.bolt/ignore`
2. Move the component back to its original location in `src/`
3. Update the router configuration
4. Update navigation items
5. Test the re-enabled functionality

See `DISABLED_FEATURES.md` in the root directory for detailed re-enabling instructions for each component.