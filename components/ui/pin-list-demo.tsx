'use client';

import { GitCommit, AlertTriangle, Box } from 'lucide-react';

import { PinList } from '@/components/animate-ui/components/community/pin-list';

const ITEMS = [
  {
    id: 1,
    name: 'Commit Zone',
    info: 'Code updates ',
    icon: GitCommit,
    pinned: true,
  },
  {
    id: 2,
    name: '404 Room',
    info: 'Fixing errors',
    icon: AlertTriangle,
    pinned: true,
  },
  {
    id: 3,
    name: 'NPM Stop',
    info: 'Install stuff ',
    icon: Box,
    pinned: true,
  },
];

export const PinListDemo = () => <PinList items={ITEMS} />;