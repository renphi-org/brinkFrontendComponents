import type { Component } from 'vue'

export interface MenuItem {
  title: string
  url: string
  icon?: Component
  isActive?: boolean
  disabled?: boolean
  items?: MenuItem[]
}

export interface MenuItemGroup {
  title?: string
  items: MenuItem[]
}

export interface AppSidebarConfig {
  title?: string
  menuGroups: MenuItemGroup[]
  collapsible?: 'icon' | 'offcanvas' | 'none'
}
