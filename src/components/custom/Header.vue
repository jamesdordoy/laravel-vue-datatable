<script>
import VueSwitch from '../generic/Switch';

export default {
    components: {
        VueSwitch,
    },
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
                <div class="w-1/3">
                    <div class="block float-right">
                        <p class="text-sm mb-0">Show Example Code&nbsp;&nbsp;
                            <br class="lg:hidden">
                            <vue-switch class="float-right"></vue-switch>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>