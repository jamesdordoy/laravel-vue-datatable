<template>
    <nav class="row" v-if="!client">
        <div class="col-md-6 text-left">
            <span>Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} Entries</span>
        </div>
        <div class="col-md-6">
            <button
                v-if="links.prev"
                :class="buttonClasses"
                @click="$emit('prev');">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                &nbsp;Prev
            </button>
            <button
                v-else
                :disabled="true"
                :class="buttonClasses"
                @click="$emit('prev');">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                &nbsp;Prev
            </button>
            <button
                v-if="links.next"
                :class="buttonClasses"
                @click="$emit('next');">
                Next&nbsp;
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button
                v-else
                :disabled="true"
                :class="buttonClasses">
                Next&nbsp;
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>        
    </nav>
</template>

<script>
    export default {
        props: {
            pagination: {
                type: Object,
                default: () => ({

                })
            },
            links: {
                type: Object,
                default: () => ({

                })
            },
            client: {

            }, 
            filtered: {

            },
            buttonClasses: {
                type: String,
                default: 'btn btn-primary mr-4',
            }
        }
    }
</script>