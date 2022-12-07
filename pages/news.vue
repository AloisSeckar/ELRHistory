<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" /> News
            </div>
            <div class="box-content">
                <div v-for="item in useNewsStore().getItems">
                    <ItemNews :item="item" />
                </div>
            </div>
        </div>
        <div class="-mt-2 text-lg">Total news: <strong>{{ useNewsStore().getCount }}</strong></div>
    </div>
</template>
