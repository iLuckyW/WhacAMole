Vue.component('mole', {
    template: `
    <div v-on:click="hit">{{ visual }}</div>
    `,
    data() {
        return {
            selectedVariant: 1,
            variants: [
                {
                    variantText: 'O'
                },
                {
                    variantText: 'X'
                }
            ]
        }
    },
    methods: {
        hit: function() {
            if (this.selectedVariant != 0) {
                this.$emit('successful-hit')
            }
            this.selectedVariant = 0
        }
    },
    computed: {
        visual() {
            return this.variants[this.selectedVariant].variantText
        }
    }
})


var game = new Vue({
    el: '#game',
})