import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro/what-is-physical-ai',
    'intro/hello-world-example',
    'intro/understanding-physical-ai',
    'intro/robotics-fundamentals',
    'intro/humanoid-robot-design',
    'intro/ai-for-robot-control',
    'intro/sensing-and-perception',
    'intro/locomotion-and-manipulation',
    'intro/ethical-considerations',
  ],
};

export default sidebars;
