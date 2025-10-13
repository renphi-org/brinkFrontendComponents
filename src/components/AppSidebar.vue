<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import type { MenuItem, AppSidebarConfig } from './AppSidebar.types'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'

interface Props {
  config: AppSidebarConfig
  currentPath?: string
}

const props = withDefaults(defineProps<Props>(), {
  currentPath: '',
})

defineSlots<{
  header?: () => any
  footer?: () => any
}>()

const isMenuItemActive = (item: MenuItem, currentPath: string): boolean => {
  if (item.url === currentPath) return true
  if (item.items?.some(subItem => subItem.url === currentPath)) return true
  return false
}
</script>

<template>
  <Sidebar :collapsible="config.collapsible || 'icon'">
    <SidebarHeader>
      <slot name="header">
        <div v-if="config.title" class="font-semibold text-sm mt-4 ml-2 truncate">
          {{ config.title }}
        </div>
      </slot>
    </SidebarHeader>

    <SidebarContent>
      <SidebarMenu>
        <SidebarGroup v-for="(group, groupIndex) in config.menuGroups" :key="groupIndex" class="!pb-0">
          <SidebarGroupLabel v-if="group.title">{{ group.title }}</SidebarGroupLabel>

          <template v-for="item in group.items" :key="item.title">
            <!-- Collapsible menu item with subitems -->
            <Collapsible
              v-if="item.items?.length"
              as-child
              :default-open="isMenuItemActive(item, currentPath)"
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton :tooltip="item.title" :disabled="item.disabled">
                    <component :is="item.icon" v-if="item.icon" />
                    <span v-if="!item.url">{{ item.title }}</span>
                    <RouterLink v-else :to="item.url">
                      <span>{{ item.title }}</span>
                    </RouterLink>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                      <SidebarMenuSubButton
                        as-child
                        :is-active="currentPath === subItem.url"
                        :disabled="subItem.disabled"
                      >
                        <RouterLink :to="subItem.url">
                          <span>{{ subItem.title }}</span>
                        </RouterLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <!-- Simple menu item without subitems -->
            <SidebarMenuItem v-else>
              <SidebarMenuButton
                as-child
                :is-active="currentPath === item.url"
                :disabled="item.disabled"
              >
                <RouterLink :to="item.url">
                  <component :is="item.icon" v-if="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </template>
        </SidebarGroup>
      </SidebarMenu>
    </SidebarContent>

    <SidebarFooter>
      <slot name="footer" />
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>
</template>
