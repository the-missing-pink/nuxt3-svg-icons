<template>
  <span class="svg-icon">
    <component
      :is="icon"
      class="svg-icon-el"
      :style="styles"
    />
  </span>
</template>

<script setup lang="ts">
import { useRuntimeConfig, defineAsyncComponent, computed } from '#imports'

const config = useRuntimeConfig()
const svgIconsConfig = config.nuxt3SvgIcons
const svgIconsDir = svgIconsConfig.dir


const props = withDefaults(defineProps<{
  name: string
  fill: string
  stroke: string
  strokeWidth: string
  size?: string | { width: string, height: string }
  useTextColor: boolean
}>(), {
  size: '1em',
  useTextColor: false
})

const styles = computed(() => {
  const styles = []
  props.useTextColor && styles.push(["fill", "currentColor !important"])
  props.fill && !props.useTextColor && styles.push(["fill", props.fill])
  props.stroke && styles.push(["stroke", props.stroke])
  props.strokeWidth && styles.push(["stroke", props.strokeWidth])
  if (props.size && typeof props.size === "object") {
    styles.push(["width", props.size.width], ["height", props.size.height])
  } else if (props.size && typeof props.size === "string") {
    styles.push(["width", props.size], ["height", props.size])
  }

  const mappedStyles = new Map(styles)
  return Object.fromEntries(mappedStyles)
})

const icon = defineAsyncComponent(() => {
  try {
    return import(/* @vite-ignore */ `${svgIconsDir}/${props.name}.svg?component`)
  } catch (error) {
    return null
  }
})
</script>

<style>
.svg-icon-el {
  vertical-align: middle;
}
</style>
