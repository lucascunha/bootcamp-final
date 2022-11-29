<template>
  <v-app light>
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
export default { 
   components: {
    Footer,
    Header
  },
  
}

</script>

<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}
body {
    margin: 0;
    padding: 0;
}
header {
    display: flex;
    justify-content: center;
    height: 120px;
}
.container {
    display: flex;
    justify-content: space-between;
    width: 1200px; 
 
}
.logo {
 
    display: flex;
    align-items: center;
}

.logo img{
    margin-top: 55px;
    width: 200px;
}
.menu {
    display: flex;
    align-items:center ;
}
nav ul,
nav li {
    list-style: none;
    margin: 0;
    padding: 0;
}
nav ul {
    display: flex;
}
nav a {
    color: #727272;
    text-decoration: none;
    display: block;
    padding: 15px;
    text-transform: uppercase;
}
nav .active a,
nav a:hover {
    background-color: #E63946;
    color: white;
}

footer{
    background-color: #4f4f4f;
    display: flex;
    justify-content: center;
}
.footer_menu {
    display: flex;

} 
.fm_1 ,.fm_2 ,.fm_3 {
    flex: 1;
    color: #ffffff;
    padding: 20px;
}

.fm_1 {
   background-color:#A8DADC;
}
.fm_2 {
   background-color:#457B9D;
}
.fm_3 {
   background-color:#1D3557;
}
.footer_area {
   display: flex;
   color: #ffffff;
}
.footer_area_item {
   color: #ffffff;
   display: flex;
   align-items: center;
}
.flexcolumn {
   flex-direction: column;
}
footer .widget_title_text {
   color: #ffffff;
   flex: 1;
   padding: 20px;
   cursor: pointer;
}

.footer_copy {
   border-top: 1px solid #ffffff;
   height: 40px;
   line-height: 40px;
   color: #ffffff;
   margin-top: 30px;
   text-align: center;
}

.menumobile {
   display: none;
   width:40px;
   height: 40px;
   margin-top:40px;
   margin-bottom: 40px;
   margin-right: 20px;
   
}

#mc_embed_signup {
   border: none;
   text-align: center;
   width: 100%; 
   margin-bottom: 40px;
} 

.mc-field-group { 
   
   display: inline-block;

}

#mce-EMAIL {  
   font-size: 1em; border: 2px solid #ABB0B2 ; 
   color: #343434;
   background-color: #fff; 
   padding: .7em 9em .7em 1em; 
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   border-radius: 3px; 
   display: inline-block;
   margin: 0; 
} 

.clear { 
   
   display: inline-block; 

}

.button { 
   font-size: 1em; 
   letter-spacing: .03em;
   color: #fff; 
   background-color: #457B9D;
   padding: .7em 2em; 
   border: 2px solid #457B9D;
   -webkit-border-radius: 3px;
   -moz-border-radius: 3px;
   border-radius: 3px; 
   display: inline-block; 
   margin: 0; 
   cursor: pointer;
} 

</style>