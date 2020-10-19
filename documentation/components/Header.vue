<script>

export default {
    methods: {
        toggleMenu() {
            document.querySelector(".nav-container").classList.toggle('hidden')
        }
    }
}
</script>

<template>
    <header class="bg-blue-800 p-2 mt-0 fixed w-full z-10 top-0 shadow">
        <div class="mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full md:justify-start text-white oxanium">
                <div class="w-2/3">
                    <span class="text-lg lg:text-2xl pl-2 ">
                        <button
                            type="button"
                            @click="toggleMenu"
                            class="rounded lg:hidden text-white text-gray-800 px-3 py-2">
                            <font-awesome-icon :icon="['fas', 'bars']" />
                        </button>
                        Laravel Vue Datatable
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>