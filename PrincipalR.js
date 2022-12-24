const $content = document.querySelector(".content")
const $bars = document.querySelector(".bars");
const $contul = document.querySelector(".Inicio-nav-list")
$bars.addEventListener("click", e=> {
    $contul.classList.toggle("nav1")

})




document.addEventListener("click", (e)=>{
    if(e.target.matches(".Inicio")){
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
       $content.innerHTML = ` <section class="Inicio-Portada-Principal">
       <div class="Inicio-Portada-Principal-Text">
       <h1>Reciclados MS.Martins</h1>
       <p>Lorem ipsum dolor sit <br> amet consectetur  omnis laudantium.</p>
       </div>
   </section>
   <section class="Inicio-Objetivos">
       <h3>¡Cuales son nuestros objetivos?</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique at quibusdam consequatur itaque harum, et vitae enim. Voluptate similique delectus unde earum saepe eos, asperiores voluptatem quis ducimus! Error.
       Eos, quaerat? Ullam aut sit, fugit quos, quis, nisi eius aliquam velit nesciunt doloribus quia!</p>
   </section>
   <section class="Inicio-Reciclamos">
       <h3>¿que reciclamos?</h3>
      <div class="Inicio-Reciclados-Container">
       <div >
           <img src="./img/botellasP.jpg" alt="">
           <div>
               <h4>PET (tereftalato de polietileno)</h4>
               
           </div>
       </div>
       <div>
           <img src="./img/tapitas.jpg" alt="">
           <div>
               <h4>PPP (Polipropileno) (Número 5)</h4>
               
           </div>
       </div>
      </div>
   </section>
   <section class="Inicio-Reciclados-Pregunta">
       <h4>Tienes alguna pregunta?</h4>
       <p>Para mas informacion puedes contactarnos </p>
       <div class="Inicio-Reciclados-Preguntas-Contacto">
           <b>llama al 111222233 <br> o <br> envia un correo a nuestro Email (msmartin@gmail.com)</b>
       </div>
       
   </section>`;
    }
    if(e.target.matches(".Conocenos")){
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
        $content.innerHTML = ` 
        <section class="Inicio-Portada-Principal">
        <div class="Inicio-Portada-Principal-Text">
            <h1>Reciclados MS.Martins</h1>
            <p>Somos una pequeña empresa que cumple con sus objetivos y mas</p>
        </div>
    </section >
    
    <section class="Inicio-Objetivos">
        <img src="./img/pexels-andrea-piacquadio-839011.jpg" alt="">
        <b>Sir.Martins</b>
    </section>
    <section class="Inicio-Objetivos">
        <h3>En que nos especializamos</h3>
        <p>Sir.Martins abrio sus puestar en Mataderos (Proviencia de Buenos Aires) a principios del 2019. Fundado por Martins y Augusto. Sir.Martins ofrece el servio de Reciclados de plasticos de alta eficencia</p>
        <p>Somo una empresa con mas de 1 de experiencia en el reciclado de plastico. <br>
        a pesar de estar arrancando relativamente hace poco seguiremos invirtiendo para mejorar la experiencia del usuario</p>
    </section>
    <section class="Conocenos-Reciclamos">
        <h3>tipo de plasticos que trabajamos</h3>
        <div class="Conocenos-Reciclados-Container">
            <div>
                <img src="http://placeimg.com/200/200/any" alt="">
                <div>
                    <b>polietileno tereftalato</b>
                </div>
            </div>
            <div>
                <img src="http://placeimg.com/200/200/any" alt="">
                <div>
                    <b>polietileno de alta densidad</b>
                </div>
            </div>
            <div>
                <img src="http://placeimg.com/200/200/any" alt="">
                <div>
                    <b>policloruro de vinilo</b>
                </div>
            </div>
            <div>
                <img src="http://placeimg.com/200/200/any" alt="">
                <div>
                    <b>polipropileno</b>
                </div>
            </div>
        </div>
       
    </section>`;
    }
    if(e.target.matches(".Contacto")){
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
        $content.innerHTML = ` 
        <section class="Inicio-Portada-Principal">
            <div class="Inicio-Portada-Principal-Text">
                <h1>Reciclados MS.Martins</h1>
                <p>Contactos</p>
            </div>
        </section >
        
        <section class="Inicio-Objetivos">
            <h2>Horarios y Citas</h2>
        </section>
        <section class="Inicio-Objetivos">
            <p>Para recebar una cita, llama al 111222233 o envia un correo a nuestro Email (msmartin@gmail.com</p>
        </section>
        <section>
            <ul class="contacto-Horario">
                <li>Lunes a viernes: 9:00-18:00 </li>
                <li>Jueves y viernes: 9:00-20:00</li>
                <li>Sábado: 9:00-18:00</li>
                <li>Domingo: cerrado</li>
            </ul>
        </section>
        <section class="Inicio-Objetivos">
            <h2>
                Visitanos
            </h2>
        </section>
       
        <section class="Inicio-Reciclamos">
            <h3>Estamos en la Avenida del Sol, 14, entre la calle Oriente y la calle Espejo. ¡Esperamos verte pronto!</h3>
           <div class="Inicio-Reciclados-Container">
            <div>
                <img src="./img/pexels-antoni-shkraba-5467588.jpg" alt="">
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.94898196443!2d144.94161294014276!3d-37.8253282991329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d450a8be10f%3A0x5045675218cfec0!2sSouthbank%20Victoria%203006%2C%20Australia!5e0!3m2!1ses-419!2sar!4v1671501921491!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           </div>
        </section>
        <section class="Inicio-Objetivos">
           <p>Estamos en la Avenida del Sol, 14, entre la calle Oriente y la calle Espejo. ¡Esperamos verte pronto!</p>
        </section>
        `;
    }
})