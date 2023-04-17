import CommentUser from "../components/CommentUser";


export default function recomendation(){
  const usuarios = [{name:'London', comment:''}, {name:'Tokyo', comment:''}, {name:'Paris', comment:''}];

  return ` 
  <section class="section-tab"> 
  
  <div class="comment-section">
      

        ${usuarios.map(user=> CommentUser(user)).join('')}

       
        
      </div>   
  

</section> 
  `  
}