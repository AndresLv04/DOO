<script setup>
defineProps({
    Component: {
        type: Object,
        required: true
    },
    arrayComponentsProps: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>
        <component v-for="(itemProp, index) in arrayComponentsProps" 
        :key="index" 
        :is="Component" 
        v-bind="itemProp" />
    </div>
</template>

<style scoped>
div {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 37px;
}
</style>
