<template>
  <div>
    <section id="geral">

<div class="container">
    
    <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="title">Nossa História</span>
                            <h2>Juntos podemos<br>
                            derrotar o preconceito</h2>
                        </div>
                        <div class="text">A Salus surgiu com a ideia de acabar com o TABU sobre doenças sexualmente transmissíveis,
                            mesmo após tantos anos da descoberta de IST's é possível perceber que muitas comunidades não
                            tem acesso à informação básica de como se prevenir corretamente, desse modo, para conscientizar 
                            as pessoas e mostrar que IST's não escolhem raça, cor e nem sexo criamos a Salus. .</div>
                    </div>



                    <div class="inner-column">
                        <div class="sec-title">
                            <h2>A Salus te ajuda a encontrar<br>
                            um teste gratuito</h2>
                        </div>
                        <div class="text">Através do nosso portal é possível encontrar todas as unidades próximas a sua região que oferecem 
                            exames gratuitos para todos os tipos de IST. Você também pode nos ajudar e incluir unidades e locais
                            em que estão oferecendo testes gratuitos, basta realizar seu cadastro.</div>
                    </div>


                
                    <div class="inner-column">
                        <div class="sec-title">
                            <h2>Compartilhe sua experiência<br>
                            de vida com outros usuários</h2>
                        </div>
                        <div class="text">Se você descobriu recentemente que é portador de alguma IST e não tem com quem desabafar, 
                            temos o nosso fórum em que você pode conversar com outras pessoas que irão te acolher e contar 
                            suas experiências de vida, você não está sozinho!</div>
                        <div class="btn-box">
                            <a href="#" class="btn">Fale Conosco</a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
    
</div>

</section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#geral {
    display: flex;
    justify-content: center;
}

#geral section {
    flex: 2;
}

#geral aside {
    flex: 1;

}
.flex {
    display: flex;
    flex-wrap: wrap;
}

a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    outline: none;
}

.sec-title .title{
position: relative;
display: block;
font-size: 18px;
line-height: 24px;
color: #457B9D;
font-weight: 500;
margin-bottom: 15px;
}

.sec-title h2{
position: relative;
display: block;
font-size:40px;
line-height: 1.28em;
color: #222222;
font-weight: 600;
padding-bottom:18px;
}

.sec-title h2:before{
position:absolute;
content:'';
left:0px;
bottom:0px;
width:50px;
height:3px;
background-color:#A8DADC;
}

.sec-title .text{
position: relative;
font-size: 16px;
line-height: 26px;
color: #A8DADC;
font-weight: 400;
margin-top: 35px;
}


.btn{
position: relative;
display: inline-block;
font-size: 17px;
line-height: 30px;
color: #ffffff;
padding: 10px 30px;
font-weight: 600;
overflow: hidden;
letter-spacing: 0.02em;
background-color:  #E63946;
}

.btn:hover{
background-color: #001e57;
color: #ffffff;
}

.about-section{
position: relative;
padding: 120px 0 70px;
}

.about-section .content-column{
position: relative;
margin-bottom: 50px;
}

.about-section .content-column .inner-column{
position: relative;
padding-left: 30px;
}

.about-section .text{
margin-bottom: 40px;
font-size: 16px;
line-height: 26px;
color: #848484;
font-weight: 400;
}


.about-section .btn{
position: relative;
}

.about-section .btn a{
padding: 15px 50px;
}



</style>