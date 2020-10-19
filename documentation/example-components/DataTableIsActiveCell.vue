<template>
    <span :class="badgeColor" class="inline-block text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
        {{ data.is_active ? "Active" : "Inactive" }}
    </span>
</template>

<script>
export default {
    props: {
        data: {

        }
    },
    computed: {
        badgeColor() {
            return  { 
                "bg-green-200": this.data.is_active,
                "bg-red-200": !this.data.is_active
            }
        }
    }
}
</script>