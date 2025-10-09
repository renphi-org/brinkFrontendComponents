---
layout: home

hero:
  name: Brink Components
  text: Vue Component Library
  tagline: A collection of beautifully designed, accessible Vue components built with Tailwind CSS and Reka UI
  actions:
    - theme: brand
      text: Get Started
      link: /components/button
    - theme: alt
      text: View on GitHub
      link: https://github.com

features:
  - icon: 🎨
    title: Beautifully Designed
    details: Thoughtfully crafted components with attention to detail and aesthetics
  - icon: ♿
    title: Accessible
    details: Built with accessibility in mind, following WAI-ARIA guidelines
  - icon: 🎯
    title: Customizable
    details: Flexible variants and easy styling with Tailwind CSS
  - icon: 📦
    title: TypeScript Ready
    details: Fully typed components with excellent IDE support
---

## Components

<div class="component-grid">

### [Button](/components/button)
A versatile button component with multiple variants and sizes.

### [Tag](/components/tag)
A flexible tag component with semantic and visual variants.

</div>

<style scoped>
.component-grid {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.component-grid h3 {
  margin-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
}
</style>
