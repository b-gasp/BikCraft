if(window.SimpleSlide){
new SimpleSlide({
  slide:"quote",
  time: 5000,
});
new SimpleSlide({
  slide:"portfolio",
  time: 5000,
  nav:true,
})
}
if(window.SimpleAnime){
new SimpleAnime({

})}
if(window.SimpleForm){
new simpleForm({
form:".formphp",
button:"#enviar",
erro:"<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com</p></div>",
sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entrarei em contato.</p></div>",


})}
