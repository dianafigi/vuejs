<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log('Destroyed!');
        },
        deactivated() { //new cycle hook. Isto aparece no console qd mudo de componente.
            console.log('Deactivated!');
        },
        activated() { //new cycle hook. Isto aparece no console qd volto para este componente.
            console.log('Activated!');
        }
    }
</script>

<style>
</style>