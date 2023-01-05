<template>
    <div id="result_element">
        <div class="row">
            <div class="col-sm-1">
                <img src="../../../img/Logo_SNCF_2011.svg.png" class="logo-transport-type">
            </div>
            <div class="col-sm-11">
                <div class="sub_element">
                    <label for="status" class="label_type">Departure:</label>
                    {{ values.source }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Arrival:</label>
                    {{ values.destination }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Departure Time:</label>
                    {{ values.departureTime }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Arrival Time:</label>
                    {{ values.arrivalTime }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">CO2 Emission:</label>
                    {{ values.co2Emission }} g
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Duration:</label>
                    {{ values.duration }} min
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResultElement",
    components: {

    },
    data() {
        return {

        }
    },
    props: {
        values: { String }
    }
}

</script>

<style scoped>
#result_element {
    border-color: #81b622;
    border-radius: 5px;
    border-style: groove;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    padding-left: 5%;
}

.sub_element {
    display: inline-block;
    width: 50%;
}

.label_type {
    width: 35%;
    font-weight: 200;
    font-style: oblique;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.logo-transport-type {
    margin-top: 10px;
    width:100%;
    max-width: 80px;
}
</style>