<template>
    <div class="flex">
        <div class="flex-shrink-0 w-10 h-10">
            <img
            class="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
            alt=""
            />
        </div>
        <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">
            {{ data.name }}
            </p>
            <p class="text-gray-600 whitespace-no-wrap">{{ data.id|padDigit(6) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
}
</script>