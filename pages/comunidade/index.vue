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
        <div class="main-container">
            <div class="left-container">
                <!-- *********************************************************************** -->
                <!-- Search Section -->
                <!-- *********************************************************************** -->
          
                <div class="search_bar_container">
                    <div class="search_bar_sub_container">
                      <input type="text" placeholder="Pesquise aqui" />
                      <button>Pesquisar</button>
                    </div>
                </div>
          

          
                <div class="members_main_container">
                    <div class="members_header">
                        <i class="fa-solid fa-earth-americas"></i>
                      <h5>Membros Ativos</h5>
                    </div>
                    <div class="members_body">
                      <div class="member_body_padges">
                        <div class="member_body_single_padge"><span>Recente</span></div>
                        <div class="member_body_single_padge"><span>Popular</span></div>
                      </div>
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Viviane de Lima</h4>
                          </div>
                        </div>
                      </div>
          
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Viviane de Lima</h4>
                          </div>
                        </div>
                      </div>
          
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Viviane de Lima</h4>
                          </div>
                        </div>
                      </div>
          
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Viviane de Lima</h4>
                          </div>
                        </div>
                      </div>
          
                    </div>
                </div>
          
          
                  <div class="members_main_container">
                    <div class="members_header">
                      <i class="fa-solid fa-user-group"></i>
                      <h5>Grupos</h5>
                    </div>
                    <div class="members_body">
                      <div class="member_body_padges">
                        <div class="member_body_single_padge"><span>Recente</span></div>
                        <div class="member_body_single_padge"><span>Popular</span></div>
                      </div>
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Grupo 1</h4>
                          </div>
                        </div>
                      </div>
          
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Grupo 2</h4>
                          </div>
                        </div>
                      </div>
          
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Grupo 3</h4>
                          </div>
                        </div>
                      </div>
          
                      <div class="members_body_account">
                        <div class="members_body_account_photo"></div>
                        <div class="members_body_account_text">
                          <div class="members_body_account_text_name">
                            <h4>Grupo 4</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          

                  <div class="members_main_container">
                    oi
                  </div>
                </div>

                <div class="middle-container">

          
                  <header>
                    <div class="header_text"><h1>Seja bem-vindo a comunidade!</h1></div>

                    <div class="header">
                      <div class="header_content">
                       
                        <div class="header_tabs">
                          <div class="tab">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <p style="white-space: pre-line;">c {{ message }}</p>
                  <textarea style="width: 615px;" v-model="message" placeholder="add multiple lines" rows="6" cols="50"></textarea>

                  <article>
                    <div class="main_section_container">
                        <div class="main_section_header">
                            <h4>Últimas Atividades</h4>
                        </div>
                      <div class="main_section_body">
                        <div class="last_activity_account">
                          <div class="last_activity_account_photo">
                            
                          </div>
                          <div class="latest_activity_account_text">
                            <div class="latest_activity_account_text_name">
                              <strong class="latest_activity_account_text_strong">Viviane de Lima</strong>
                              <span class="latest_activity_account_text_strong_span">
                                postou no grupo
                              </span>
                              <strong>A vida de um soropositivo</strong>
                            </div>
                            <div class="latest_activity_year_month">
                              <span>2 dias atrás </span>
                            </div>
                            <span class="latest_activity_account_text_strong_post">
                              <p>
                                Chama-se soropositivo um indivíduo portador de anticorpos no sangue que provém a presença de um agente infeccioso. O termo é mais usado para ...
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                        <div class="last_activity_account">
                          <div class="last_activity_account_photo"></div>
                          <div class="latest_activity_account_text">
                            <div class="latest_activity_account_text_name">
                              <strong class="latest_activity_account_text_strong">Viviane de Lima</strong>
                              <span class="latest_activity_account_text_strong_span">
                                postado no grupo
                              </span>
                              <strong>Sou homossexual e tenho HIV</strong>
                            </div>
                            <div class="latest_activity_year_month">
                              <span>1 dia atrás</span>
                            </div>
                            <span class="latest_activity_account_text_strong_post">
                              <p>
                                Por ser homossexual, tenho de aceitar a ideologia de género e a sua natureza mais política do que científica? Se a minha homossexualidade é
                              </p>
                            </span>
          
                            
                          </div>
                        </div>
          
                        <div class="last_activity_account">
                          <div class="last_activity_account_photo">

                          </div>
                          <div class="latest_activity_account_text">
                            <div class="latest_activity_account_text_name">
                              <strong class="latest_activity_account_text_strong">Viviane de Lima</strong>
                              <span class="latest_activity_account_text_strong_span">
                                postado no grupo
                              </span>
                              <strong>Duvidas gerais sobre HPV</strong>
                            </div>
                            <div class="latest_activity_year_month">
                              <span>10 horas atrás</span>
                            </div>
                            <span class="latest_activity_account_text_strong_post">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Similique, dolor. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Suscipit, iste!
                              </p>
                            </span>
                          </div>
                        </div>
          
                        <div class="last_activity_account">
                          <div class="last_activity_account_photo"></div>
                          <div class="latest_activity_account_text">
                            <div class="latest_activity_account_text_name">
                              <strong class="latest_activity_account_text_strong">Viviane de Lima</strong>
                              <span class="latest_activity_account_text_strong_span">
                                postado no grupo
                              </span>
                              <strong>UBS disponíveis para tratamento</strong>
                            </div>
                            <div class="latest_activity_year_month">
                              <span>3 dias atrás</span>
                            </div>
                            <span class="latest_activity_account_text_strong_post">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Similique, dolor. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Suscipit, iste!
                              </p>
                            </span>
                        </div>
                        
                    </div>
          
                    <button class="last_activity_load_more">Carregar mais posts</button>

                    </div>

                  </article>
  
                  <article>
                    <div class="main_section_container">
                      <div class="main_section_header">
                        <h4>Últimas postagens</h4>
                      </div>
                      <div class="main_section_body">
                        <div class="single_post">
                          <div class="single_post_img"></div>
                          <div class="single_post_text">
                            <div class="single_post_title">
                             Postagem 1
                            </div>
                            <div class="single_post_info">
                              <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentiu At vero eos et accusamus et
                                iusto odio dignissimos ducimus qui blanditiis praesentium…
                              </p>
          
                              <i class="fas fa-angle-double-right"></i>
                            </div>
                          </div>
                        </div>
          
 
                        <div class="single_post">
                          <div class="single_post_img"></div>
                          <div class="single_post_text">
                            <div class="single_post_title">
                                Postagem 2
                            </div>
                            <div class="single_post_info">
                              <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentiu At vero eos et accusamus et
                                iusto odio dignissimos ducimus qui blanditiis praesentium…
                              </p>
          
                              <i class="fas fa-angle-double-right"></i>
                            </div>
                          </div>
                        </div>
          
                        <div class="single_post">
                          <div class="single_post_img"></div>
                          <div class="single_post_text">
                            <div class="single_post_title">
                                Postagem 3
                            </div>
                            <div class="single_post_info">
                              <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentiu At vero eos et accusamus et
                                iusto odio dignissimos ducimus qui blanditiis praesentium…
                              </p>
          
                              <i class="fas fa-angle-double-right"></i>
                            </div>
                          </div>
                        </div>
   
                        <div class="single_post">
                          <div class="single_post_img"></div>
                          <div class="single_post_text">
                            <div class="single_post_title">
                                Postagem 3
                            </div>
                            <div class="single_post_info">
                              <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentiu At vero eos et accusamus et
                                iusto odio dignissimos ducimus qui blanditiis praesentium…
                              </p>
          
                              <i class="fas fa-angle-double-right"></i>
                            </div>
                          </div>
                        </div>
                        <div class="single_post">
                          <div class="single_post_img"></div>
                          <div class="single_post_text">
                            <div class="single_post_title">
                                Postagem 4 por {{ returnLogin }}
                            </div>
                            <div class="single_post_info">
                              <p>
 {{ message }}
                              </p>
          
                              <i class="fas fa-angle-double-right"></i>
                            </div>
                          </div>
                        </div>
                        <div class="single_post_next_post">
                          <div class="first_page"><p>1</p></div>
                          <div class="seconed_page"><p>2</p></div>
                          <div class="next_page">
                            <p><i class="fas fa-chevron-right"></i></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
          
                 
                </div>

          
                <div class="right-container">


          
                  <article v-if="returnLogin === 'LOGIN'">
                    <div class="main_section_container">
                        <div class="main_section_header">
                            <i class="fa-solid fa-handshake-angle"></i>
                            <h4>Gostaria de ajudar?</h4>
                        </div>
                      <div  class="main_section_body features_container">
                        <div class="sub_container">
                          <p  class="text_grey">Para contribuir é necessário realizar seu <a href="./cadastro.html"> cadastro</a></p>
                        </div>
                      </div>
                    </div>
                  </article>

          
                <article>
                    <div class="main_section_container">
                      <div class="main_section_header">
                        <i class="fa-solid fa-comment-dots"></i>
                        <h4>Disponível para conversar</h4>
                      </div>
                      <div class="main_section_body features_container">
                        <div class="sub_container">
                          <p class="text_grey">Nenhum usuários disponível para conversar</p>
                        </div>
                      </div>
                    </div>
                </article>
            </div>
        </div>

    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  computed: {
    returnLogin(){
        try{
            return this.$nuxt.$fire.auth.currentUser.email ? this.$nuxt.$fire.auth.currentUser.email : 'LOGIN'
        } catch {
            return 'LOGIN'
        }
    }
}
}
</script>

<style scoped>

#banner {
    display: flex;
    justify-content: center;
    background-image: url('/images/banner-4.jpg');
    background-position: center;
    background-size: cover;
    height: 575px;
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



.main-container {
    width: 100%;
    background: #f0f0ed;
    padding: 20px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    box-sizing: border-box;
}
  
.left-container {
    width: 21%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 10px;
}

.middle-container {
    width: 58%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 10px;
}

.right-container {
    width: 21%;
    height: 100%;
    float: right;
    box-sizing: border-box;
    margin: 0 10px;
}

.search_bar_container {
    height: 60px;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: center;
}
  
  .search_bar_sub_container {
    padding: 10px 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search_bar_sub_container input {
    width: 150px;
    height: 30px;
    border: none;
    background: #f7f7f7;
    padding: 10px;
    box-sizing: border-box;
    margin: 5px;
    border-radius: 5px;
  }
  
.search_bar_sub_container button {
    width: 95px;
    height: 30px;
    border: none;
    background: #457B9D;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}
    
.members_main_container {
    width: 100%;
    background: #fff;
    margin-top: 15px;
    box-sizing: border-box;
    border-radius: 8px;
}
.members_header {
    font-size: 17px;
    border-bottom: 1px solid #eee;
    padding: 10px;
    background: #f7f7f7;
    border-radius: 8px 8px 0 0;
}
  
.members_body {
    padding: 10px;
    height: 100%;
    overflow: auto;
}
  
.member_body_padges {
    display: inline-block;
    margin-bottom: 3px;
}
.member_body_single_padge {
    background: #1D3557;
    margin: 0 3px 3px 0;
    border-radius: 5px;
    color: #fff;
    padding: 2px;
    float: left;
}
  
.member_body_single_padge span {
    font-size: 15px;
    padding: 5px;
    text-align: center;
    margin: auto;
}
  
.members_body_account {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
  
.members_body_account_photo {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    flex-shrink: 0;
    background: url("/images/user.png")center/cover;
    cursor: pointer;
}
  
.members_body_account_text {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 8px 18px;
}
  
.members_body_account_text_frinds {
    background: #e4ecf1;
    color: #839fbb;
    font-size: 15px;
    padding: 2px 10px;
    border-radius: 5px;
    margin: 1px 3px;
}
  
.Resently_img_container {
    display: inline-block;
    padding: 15px;
}

.Resently_img_container .members_body_account_photo {
    float: left;
    margin: 8px 15px 8px 0;
}
  
  
.Resently_Schudle_container {
    display: inline-block;
    padding: 10px 33px 5px 25px;
}
  
.date_year {
    padding: 20px;
    font-size: 13px;
}

.date_year p {
    float: right;
}

.prev_month {
    padding: 0 0 5px 10px;
    font-size: 13px;
}



.latest_activity_account_text {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 8px 18px;
}
  
.latest_activity_account_text_strong_span {
    color: #808080;
}
  
.latest_activity_account_text_strong_post {
    color: #808080;
    margin-top: 5px;
}
  
.latest_activity_year_month {
    color: #808080;
    font-size: 12px;
    line-height: 1.2rem;
}
  
.last_activity_account_photo {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    flex-shrink: 0;
    background: url("/images/user.png")center/cover;
    cursor: pointer;
}
  
.last_activity_account {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: #eee 1px solid;
    margin-bottom: 15px;
}
  
.last_activity_load_more {
    width: 100%;
    height: 35px;
    background: #eee;
    border: none;
    border-radius: 5px;
}

.single_post_img {
    background: url("/images/alto-falante.png")center/cover;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    flex-shrink: 0;
}
  
  
.single_post {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 25px;
    cursor: pointer;
}
  

  
.single_post_text {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
  
  
.single_post_title {
    font-size: 1rem;
    font-weight: bold;
    margin: 5px 0;
}
  

  
.single_post_info {
    color: #808080;
}
  
.single_post_info {
    font-size: 0.8rem;
    color: #333;
}
  
.Latest_posts_header {
    border-bottom: 1px solid #eee;
    padding: 15px;
    background: #f7f7f7;
    border-radius: 10px 10px 0 0;
}
  

.single_post_next_post {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}



.first_page p {
    background: #eee;
}

.next_page p,
.seconed_page p,
.first_page p {
    cursor: pointer;
}
  
 

.single_feature_img {
    background: url("https://www.energeticthemes.com/themes/munfarid/wp-content/uploads/sites/85/2018/09/10.jpg")
      center/cover;
    width: 130px;
    height: 100px;
    border-radius: 8px;
    flex-shrink: 0;
}
  
  

.main_section_container {
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 10px;
}

.main_section_container a:hover {
    color: #E63946;
}

.main_section_header {
    border-bottom: 1px solid #eee;
    padding: 15px;
    background: #f7f7f7;
    border-radius: 8px 8px 0 0;
}
  
.main_section_body {
    padding: 15px 10px;
    height: 100%;
    overflow: auto;
}

.sub_container {
    width: 90%;
    margin: auto;
}
  

.statics_padge {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 5px;
    background: #c12f6c;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 5px;
    cursor: pointer;
}

</style>