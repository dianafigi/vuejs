<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                  <!-- isto impede q o componente seja destruido. Se n tiver isto o Lifecycle da instancia ocorre. Se por exemplo tiver um counter++ noutro componente, com isto, qd mudo de componente o counter mantem o numero, sem isto, recomeça no zero. -->
                    <component :is="selectedComponent">
                      <!-- dinamic component. Isto é como o slot, tipico do vue. -->
                      <!-- utiliza o :is para fazer o bind com o componente em questao -->
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!--<app-quote>-->
                    <!--<h2 slot="title">{{ quoteTitle }}</h2>-->
                    <!--<p>A wonderful Quote</p>-->
                <!--</app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
