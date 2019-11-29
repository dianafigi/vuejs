<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <!-- o resetName vem desta child, do metodo -->
        <button @click="resetName">Reset Name</button>
        <!-- o resetFn() vem do parent. tem os parenteses para realizar a callback. No Parent ta sem parenteses pq resetFn aí aponta para a localizaçao da memoria da funçao-->
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
      //os nomes das props têm de ser iguais ao q aparece no template do 'Parent'. Este é o 'Child. PE myName aqui, no template: :myName="name"
        props: {
            myName: {
                type: String,
                //required: true   -> outra opçao
                //default: 'Max'   -> outra opçao
                //type: String: desta forma estou a validar o conteudo desta prop. Se a defino como string, vai receber do tipo string. Pode validar mais do q um tipo: [String, Array]
            },
            resetFn: Function,
            //é uma funçao q vem do parente e q é passada como prop. Aqui na child é dps executada a callback para funcionar
            userAge: Number
        },
        methods: {
            switchName() {
              //posso usar os props dentro do proprio construtor, check below. Using props in the child component
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName); //$emit evento do vue. Usar isto para informar o Parent que o nome foi alterado no Child
                //no Parent, no template colocar @nameWasReset="name = $event para q ele posso estar informado do evento
            }
        },
        created() {
          //este evento é criado no main.js e leva informaçao de uma child para outra. Esta é a child receptora
            eventBus.$on('ageWasEdited', (age) => {
              //age pode ter qq nome
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
