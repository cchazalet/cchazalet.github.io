<template>
    <div id="result_element">
        <div class="row">
            <div class="col-sm-1">
                <img src="../../../img/1280px-Flixbus_201x_logo.svg.png" class="logo-transport-type">
            </div>
            <div class="col-sm-11">
                <div class="sub_element">
                    <label for="status" class="label_type">Departure:</label>
                    {{ depart }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Arrival:</label>
                    {{ arrival }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Departure Time:</label>
                    {{ values.depatureTime }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Arrival Time:</label>
                    {{ values.arrivalTime }}
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Price:</label>
                    {{ values.price }} euros
                </div>
                <div class="sub_element">
                    <label for="status" class="label_type">Duration:</label>
                    {{ values.duration }} min
                </div>
                {{ values.msg }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BusResultElement",
    components: {

    },
    data() {
        return {

        }
    },
    props: {
        values: { String },
        depart: String,
        arrival: String
    }
}

</script>

<style scoped>
#result_element {
    border-color: #81b622;
    border-radius: 5px;
    border-style: groove;
    margin-top: 5px;
    margin-left: 50px;
    margin-right: 50px;
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
    width: 80px;
}
</style>