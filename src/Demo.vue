<script lang="ts" setup>
withDefaults(
    defineProps<{
    prefix : string,
    person: {
        firstname : string, 
        lastname : string
    }
}>(), {
    prefix : 'Bonjour'
}
)

</script>

<template>

</template>