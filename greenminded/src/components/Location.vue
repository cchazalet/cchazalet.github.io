<template>
    <div id = "location">
        <h2 class="position_font">
            <slot></slot>
        </h2>
    </div>
</template>

<script>
    export default{
        name: 'LocationElement'
    }
</script>

<style scoped>
    #location {
        background: #81b622;
        height: 50px;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 5px;
        padding-bottom: 5px;

    }

</style>