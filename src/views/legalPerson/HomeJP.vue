<template>
  <div class="pantalla">

    <div class="column1">
       <img class="positionPerson1" src="./img/person3.png" height="200" width="400" />

            <v-card color="purple" class="white--text sizeCard">
              <v-card-title primary-title>
                <div>
                  <div class=" centerTitle sizeTitle">¡Bienvenido!</div>
                 
                  <p class="text-justify space"> Como persona jurídica en nuestra plataforma, podrá ofertar deudas que tengan las demás empresas con usted a lago plazo, dentro de su portafolio. Esto permitirá que diferentes inversionistas la compren a un menor precio pero ofreciendole un flujo efectivo en el presente. ¡No deje desaprovechar esta oportunidad! </p>
                
                </div>
              </v-card-title>
            </v-card>

        <div class="centerButton">
           <v-btn x-large class="ma-2 " color="purple darken-2" to="/registerDebt" dark>
            <i class="fas fa-plus-circle"></i>
           <v-icon dark left>mdi-plus-circle</v-icon>Crear venta deuda
           </v-btn>
        </div>
           
    </div>

    <div class="column2">
      <div class="row1">
        <img src="./img/arrow.png" height="150" width="150" />
        <img class="money" src="./img/money.png" height="150" width="150" />
        <img class="rotate1" src="./img/arrow.png" height="150" width="150" />

      </div>

      <div class="row2">
        
         <img src="./img/increase.png" height="150" width="150" />
         <img  class="rotate2" src="./img/arrow.png" height="150" width="150" />
         <img  src="./img/idea.png" height="150" width="150" />
        

      </div>
      
     
      

    </div>

  </div>
</template>

<script>
export default {
  name: "WelcomeJudicialPerson",
  created() {
    this.$store.commit("changeNavBar", 0);
  },
};
</script>

<style scoped>

.money {
margin-left: 50px;
margin-right: 50px;
}

.whiteColor {
  color: white;
}
.sizeCard {
    height: 350px;
    width: 615px;
    
}
.centerTitle {
     margin-top: 20px;
     text-align:center;
}
.sizeTitle {
  font-size:50px 
}

.centerButton{
margin-left: 26%;
}

.space{
    margin-top: 40px;
}

.positionPerson1{
  margin-left: 16%;
}
.pantalla{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
}
.column1{
    display: flex;
    width: 45%;
    flex-direction: column;
}
.column2{
  display: flex;
    width: 50%;
    flex-direction: column;
    margin-top: 10%;
  
}
.row1{
  display: flex;
    width: 50%;
    flex-direction: row;
  
}
.row2{
display: flex;
    width: 50%;
    flex-direction: row;
    margin-top: 30px;
}

.rotate1{
    transform: rotateZ(75deg);
}
.rotate2{
    transform: rotateZ(220deg);
    margin-left: 50px;
    margin-right: 50px;
}

</style>
