new Vue({
    el: "#componente_1",
    data:{
        valores: "",
    },
    methods:{
        inicia(){
            console.log("saludos desde el componente numero 1");
        },
    },
    mounted(){
        this.inicia();
    },
    computed:{
    }
});