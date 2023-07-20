new Vue({
    el: "#app",
    data:{
        valores: "",
    },
    methods:{
        inicio(){
            this.valores = "Saludos desde el frontend de Vue Js";
            console.log("Conexion exitosa de los archivos en el backend");
        },
    },
    mounted(){
        this.inicio();
    },
    computed:{
    }
});