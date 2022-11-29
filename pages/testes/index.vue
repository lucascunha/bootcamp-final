<template>
  <div>
    <section id="banner">
        <div class="container column">
            <div class="banner_headline">
                <h1>Projeto Salus</h1>
                <h2>Encontre a unidade mais próxima para realizar seu exame</h2>
            </div>
            </div> 
    </section>


    <section id="geral">

        <div class="container-main">
            <h1 class="title">Endereços da Rede Municipal Especializada em IST/Aids:</h1>
            <div class="widget_title_bar"></div>
            <div id="container">  
                <div class="cell"><input type="search" placeholder="Qual seu bairro?"></div>
                <div class="cell"><div class="button">Pesquisar</div></div>
            </div>
        </div>

    </section>
    <div style="text-align: center;" class="title">Verificado</div>
    <section id="geral">

        <div class="responsive">
            <div class="img">
                <img src="/images/henfil.jpg" alt="CTA" width="300" height="200">
                <div class="desc">
                    CTA Henfil (Henrique de Souza Filho)
                    R. Libero Badaró, 144 Centro 
                    <p><strong>Tel.: (11) 3241-2224</strong></p>
                </div>
            </div>
        </div>


        <div class="responsive">
            <div class="img">
                <img src="/images/eliseos.jpg" alt="CTA" width="300" height="200">
                <div class="desc">SAE Campos Elíseos
                    Al. Cleveland, 374 - Santa Cecília
                    <p><strong> Tel.: (11) 3331-1216</strong></p>
                </div>
            </div>
        </div>

        <div class="responsive">
            <div class="img">
                <img src="/images/penha.png"  alt="CTA" width="300" height="200">
                <div class="desc">
                    SAE Penha
                    Praça Nossa Senhora
                    Penha de França,55 - São Paulo
                    <p><strong>Tel.: (11) 2295-0391</strong></p>
                </div>
            </div>
        </div>

        <div class="responsive">
            <div class="img">
                <img src="/images/pirituba.png"  alt="CTA" width="300" height="200">
                <div class="desc">CTA Pirituba
                    Av. Dr. Felipe Pinel, 12 - Pirituba
                    <p><strong>Tel.: (11) 3974-8569</strong></p>
                </div>
            </div>
        </div>

        <div class="responsive">
            <div class="img">
                <img src="/images/santana.png"  alt="CTA" width="300" height="200">
                <div class="desc">SAE Santana (Marcos Lottenberg)
                    R. Dr. Luís Lustosa da Silva, 339 - Mandaqui
                    <p><strong>Tel.: (11) 2950-9217</strong></p>
                </div>
            </div>
        </div>

        <div class="responsive">
            <div class="img">
                <img src="/images/santo-amaro.png"  alt="CTA" width="300" height="200">
                <div class="desc">SAE Santo Amaro (Dra. Denizes Dornelas de Oliveira)
                    R. Padre José de Anchieta, 640 – Santo Amaro
                    <p><strong> Tel.: (11) 5686-1613</strong></p>
                </div>
            </div>
        </div>

                    <div class="responsive">
                        <div class="img">
                            <img src="/images/mooca.png" alt="CTA" width="300" height="200">
                            <div class="desc">CTA Mooca
                                Rua Taquari, 549 - Mooca, São Paulo
                                <p><strong>Tel.: (11) 2694-3338</strong></p>
                            </div>
                        </div>
                    </div>

                <div class="responsive">
                    <div class="img">
                        <img src="/images/refugio.png" alt="CTA" width="300" height="200">
                        <div class="desc">SAE Jardim Mitsutani / CTA Parque Ipê
                            R. Vittório Emanuele Rossi, 97 – Jd. Bom Refúgio
                            <p><strong>Tel.: (11) 5841-9020</strong></p>
                        </div>
                    </div>
                </div>
                
                

        


    </section>
    <div style="text-align: center;" class="title">Posts da comunidade</div>
    <section id="geral">

        <div  v-for="display in table.lista" :key="display.id" class="responsive">

            
                    <div class="img">
                        <img src="/images/placeholder.png" alt="CTA" width="300" height="200">
                        <div class="desc"> {{ display.nome }} / {{ display.logradouro }}
                            {{ display.bairro }}
                            <p><strong>Tel.: {{display.tel}}</strong></p>
                        </div>
                    </div>
                
            </div>
    </section>
    <div class="container">
    <form v-on:submit="addProduct">
  <input type="text" v-model="nome" placeholder="nome" >
  <input type="text" v-model="cidade" placeholder="cidade">
  <input type="text" v-model="logradouro" placeholder="logradouro">
  <input type="text" v-model="bairro" placeholder="bairro">
  <input type="text" v-model="cep" placeholder="cep">
  <input type="text" v-model="tel" placeholder="tel">
  <input type="text" v-model="uf" placeholder="uf">
  
</form>

    </div>
    <br>
<button @click="addProduct">Adicionar</button>
  </div>

</template>

<script>
export default {
    name: 'testes',
    data() {
    return {
        table: [],
        nome: '',
        cidade: '',
        logradouro: '',
        bairro: '',
        cep: '',
        tel: '',
        uf: ''
    }
  },
  async fetch() {
    try{
      this.table = await this.$axios.$get(
          `http://localhost:4000/unidades`,
          { headers: { 'Access-Control-Allow-Origin': '*' } },
        )
    } catch {
    }  
    console.log("thisdata", this.table.lista)
},
methods: {
  async addProduct(){
    await this.$axios.$post(
          `http://localhost:4000/unidades`, { nome: 'CTA Pirituba', cidade:'São Paulo', logradouro: 'Av. Dr. Felipe Pinel, 12 ', bairro: 'Pirituba', cep:'02939-000', tel: '(11) 3974-8569', uf:'SP' },
        )
  }
}
}
</script>

<style scoped>
#banner {
    display: flex;
    justify-content: center;
    background-image: url('/images/banner-3.jpg');
    background-position: center;
    background-size: cover;
    height: 550px;
}

.banner_headline h1 {
    color: #ffffff;
    font-size: 70px;
    text-shadow: 2px 2px 2px#444444;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    padding: 0px;
    max-width: 350px;
}
.banner_headline h2 {
    color: #ffffff;
    font-size: 25px;
    text-shadow: 2px 2px 2px#444444;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    margin-top: 30px;
    padding: 0px;
    max-width: 350px;
}


#geral {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.flex {
    display: flex;
    flex-wrap: wrap;
}

.title{
    margin-bottom: 20px;
    text-align: center;
}

.widget_title_bar {
    width: 680px;
    height: 3px;
    background-color:#1D3557;
    margin-bottom:20px;
}


div#container {
    display: table; 
    width: 450px;
    margin-bottom: 20px;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    margin-bottom: 20px;
}

div#container div.cell {
    display: table-cell;
}

div#container div.cell:last-child {
    /* Makes sure this cell is only wide enough
       for the button label. */
    width: 1px;
}
  
input[type=search], div.button {  
    width: 100%;
    height: 35px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 17px;
}
  
input[type=search] {
    margin: 0;
    padding: 0 10px;
    background-color: #f9f5f5;
    border: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
  
div.button {
    line-height: 35px;
    margin: 0;
    padding: 0 20px;
    color: #fff;
    background-color: #457B9D;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    white-space: nowrap;
}


/* The Image Box */
div.img {
    border: 1px solid #ccc;
}

div.img:hover {
    border: 1px solid #777;
}

/* The Image */
div.img img {
    width: 100%;
    height: auto;
    cursor: pointer;
}

/* Description of Image */
div.desc {
    padding: 15px;
    text-align: center;
}

/* Add Responsiveness */
.responsive {
    padding: 0 6px;
    display: flex;
    width: 25%;
    margin-bottom: 20px;
    
}
.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}


</style>