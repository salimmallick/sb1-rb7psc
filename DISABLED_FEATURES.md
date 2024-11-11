# Disabled Features Documentation

## Overview
This document tracks temporarily disabled features to optimize development workflow and token usage.

## Currently Disabled Categories

### 1. Overview Dashboard
- Location: `src/pages/overview/`
- Components: `src/components/overview/`
- Status: Temporarily disabled
- Dependencies: 
  - BaseWidget
  - GridLayoutWrapper
- Re-enable steps:
  1. Remove entries from `.bolt/ignore`
  2. Restore route in `src/routes.tsx`
  3. Update default route from Observability back to Overview

### 2. Echo AI Assistant
- Location: `src/components/echo-ai/`
- Status: Temporarily disabled
- Re-enable steps:
  1. Remove entry from `.bolt/ignore`
  2. Restore component in dashboard layout

### 3. Analytics Category
- Location: `src/pages/analytics/`
- Components: `src/components/analytics/`
- Status: Temporarily disabled
- Re-enable steps:
  1. Remove entries from `.bolt/ignore`
  2. Restore routes in `src/routes.tsx`
  3. Restore navigation items

### 4. Security Category
- Location: `src/pages/security/`
- Status: Temporarily disabled
- Re-enable steps: Same as Analytics category

### 5. Cost Management Category
- Location: `src/pages/costs/`
- Status: Temporarily disabled
- Re-enable steps: Same as Analytics category

### 6. Alerts & Incidents Category
- Location: `src/pages/alerts/`
- Status: Temporarily disabled
- Re-enable steps: Same as Analytics category

### 7. Observability Category
- Location: `src/pages/observability/`
- Components: 
  - Infrastructure Monitoring
  - APM
  - Database Monitoring
  - Log Analytics
- Status: Temporarily disabled
- Dependencies:
  - BaseWidget
  - ECharts components
  - Navigation components
- Re-enable steps:
  1. Remove entries from `.bolt/ignore`
  2. Restore routes in `src/routes.tsx`
  3. Restore navigation items
  4. Re-enable all sub-categories:
    - Infrastructure
    - APM
    - Database
    - Logs

## File Structure for Disabled Features
```
disabled/
├── overview/
├── echo-ai/
├── analytics/
├── security/
├── costs/
├── alerts/
└── observability/
    ├── infrastructure/
    ├── apm/
    ├── database/
    └── logs/
```

## Re-enabling Process
1. Remove category entries from `.bolt/ignore`
2. Copy files back from `disabled/` directory
3. Update router configuration in `src/routes.tsx`
4. Update navigation in `src/components/navigation/navigation-items.tsx`
5. Test the re-enabled category thoroughly

## Core Components (Always Enabled)
- `src/components/dashboard/`
- `src/components/ui/`
- `src/lib/`
- Base layouts and templates