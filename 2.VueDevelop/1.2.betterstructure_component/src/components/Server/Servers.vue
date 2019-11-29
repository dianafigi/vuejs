<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
/* se n tivesse 'scoped', o conteudo geral ficava com a border vermelha. Assim fica so este elemento */
    div {
        border: 1px solid blue;
    }
</style>
